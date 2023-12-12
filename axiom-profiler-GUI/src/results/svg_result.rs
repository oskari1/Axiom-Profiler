use crate::results::graph_info::{GraphInfo, Msg as GraphInfoMsg};

use self::colours::HSVColour;
use super::{filters::{
    filter_chain::{FilterChain, Msg as FilterChainMsg},
    graph_filters::Filter,
}, worker::Worker};
// use super::graph::graph_container::GraphContainer;
use material_yew::WeakComponentLink;
use num_format::{Locale, ToFormattedString};
use petgraph::dot::{Config, Dot};
use petgraph::graph::{NodeIndex, EdgeIndex};
use smt_log_parser::{
    items::{QuantIdx, DepType::Equality},
    parsers::{
        z3::{
            inst_graph::{EdgeType, InstGraph, InstInfo, EdgeInfo},
            z3parser::Z3Parser,
        },
        LogParser,
    },
};
use std::{num::NonZeroUsize, rc::Rc};
use viz_js::VizInstance;
use web_sys::window;
use yew::prelude::*;

pub const EDGE_LIMIT: usize = 500;
pub const DEFAULT_NODE_COUNT: usize = 125;

pub enum Msg {
    UpdateSvgText(AttrValue, bool),
    RenderGraph(UserPermission),
    ApplyFilter(Filter),
    ResetGraph,
    GetUserPermission,
    WorkerOutput(super::worker::WorkerOutput),
    UpdateSelectedNodes(Vec<InstInfo>),
}

pub struct UserPermission {
    permission: bool,
}

impl Default for UserPermission {
    fn default() -> Self {
        Self { permission: false }
    }
}

impl From<bool> for UserPermission {
    fn from(value: bool) -> Self {
        Self { permission: value }
    }
}

struct GraphDimensions {
    node_count: usize,
    edge_count: usize,
}

pub struct SVGResult {
    parser: Rc<Z3Parser>,
    colour_map: QuantIdxToColourMap,
    inst_graph: InstGraph,
    svg_text: AttrValue,
    filter_chain_link: WeakComponentLink<FilterChain>,
    insts_info_link: WeakComponentLink<GraphInfo>,
    graph_dim: GraphDimensions,
    worker: Option<Box<dyn yew_agent::Bridge<Worker>>>,
    async_graph_and_filter_chain: bool,
    get_node_info: Callback<(NodeIndex, bool, Rc<Z3Parser>), InstInfo>,
    get_edge_info: Callback<(EdgeIndex, bool, Rc<Z3Parser>), EdgeInfo>,
    selected_insts: Vec<InstInfo>,

}

#[derive(Properties, PartialEq)]
pub struct SVGProps {
    pub trace_file_text: AttrValue,
}

impl Component for SVGResult {
    type Message = Msg;
    type Properties = SVGProps;

    fn create(ctx: &Context<Self>) -> Self {
        log::debug!("Creating SVGResult component");
        let parser = Z3Parser::from_str(&ctx.props().trace_file_text).process_all();
        let inst_graph = InstGraph::from(&parser);
        let total_nr_of_quants = parser.total_nr_of_quants();
        let colour_map = QuantIdxToColourMap::from(total_nr_of_quants);
        let get_node_info = Callback::from({
            let inst_graph = inst_graph.clone();
            move |(node, ignore_ids, parser): (NodeIndex, bool, Rc<Z3Parser>)| {
            inst_graph.get_instantiation_info(node.index(), parser, ignore_ids).unwrap()
        }});
        let get_edge_info = Callback::from({
            let inst_graph = inst_graph.clone();
            move |(edge, ignore_ids, parser): (EdgeIndex, bool, Rc<Z3Parser>)| {
            inst_graph.get_edge_info(edge, parser, ignore_ids).unwrap()
        }});
        Self {
            parser: Rc::new(parser),
            colour_map,
            inst_graph,
            svg_text: AttrValue::default(),
            filter_chain_link: WeakComponentLink::default(),
            insts_info_link: WeakComponentLink::default(),
            graph_dim: GraphDimensions {
                node_count: 0,
                edge_count: 0,
            },
            worker: Some(Self::create_worker(ctx.link().clone())),
            async_graph_and_filter_chain: false,
            get_node_info,
            get_edge_info,
            selected_insts: Vec::new(),
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::WorkerOutput(_out) => {
                false
            }
            Msg::ApplyFilter(filter) => {
                log::debug!("Applying filter {}", filter);
                if let Some(ref path) = filter.apply(&mut self.inst_graph) {
                    self.insts_info_link
                        .borrow()
                        .clone()
                        .unwrap()
                        .send_message(GraphInfoMsg::SelectNodes(path.clone()));
                    false
                } else {
                    false
                }
            }
            Msg::ResetGraph => {
                log::debug!("Resetting graph");
                self.inst_graph.reset();
                false
            }
            Msg::RenderGraph(UserPermission { permission }) => {
                let (node_count, edge_count, node_count_decreased, edge_count_decreased) = self.inst_graph.retain_visible_nodes_and_reconnect();
                log::debug!("The current node count is {}", node_count);
                self.graph_dim.node_count = node_count;
                self.graph_dim.edge_count = edge_count;
                let safe_to_render = edge_count <= EDGE_LIMIT || node_count <= DEFAULT_NODE_COUNT || edge_count_decreased || node_count_decreased;
                if safe_to_render || permission {
                    self.async_graph_and_filter_chain = false;
                    log::debug!("Rendering graph");
                    let filtered_graph = &self.inst_graph.visible_graph;

                    // Performance observations (default value is in [])
                    //  - splines=false -> 38s | [splines=true] -> ??
                    //  - nslimit=2 -> 7s | nslimit=4 -> 9s | nslimit=7 -> 11.5s | nslimit=10 -> 14s | [nslimit=INT_MAX] -> 38s
                    //  - [mclimit=1] -> 7s | mclimit=0.5 -> 4s (with nslimit=2)
                    // `ranksep` dictates the distance between ranks (rows) in the graph,
                    // it should be set dynamically based on the average number of children
                    // per node out of all nodes with at least one child.
                    let settings = ["ranksep=1.0;", "splines=false;", "nslimit=6;", "mclimit=0.6;"];
                    let dot_output = format!(
                        "digraph {{\n{}\n{:?}\n}}",
                        settings.join("\n"),
                        Dot::with_attr_getters(
                            filtered_graph,
                            &[Config::EdgeNoLabel, Config::NodeNoLabel, Config::GraphContentOnly],
                            &|_, edge_data| format!(
                                "id={} style={} class={} arrowhead={}",
                                match edge_data.weight().orig_graph_idx {
                                    Some(idx) => format!("edge{}", idx.index()),
                                    None => "indirect".to_string() 
                                },
                                match edge_data.weight().edge_type {
                                    EdgeType::Direct(_) => "solid",
                                    EdgeType::Indirect => "dashed",
                                },
                                match edge_data.weight().edge_type {
                                    EdgeType::Direct(_) => "direct",
                                    EdgeType::Indirect => "indirect",
                                },
                                match edge_data.weight().edge_type {
                                    EdgeType::Direct(Equality) => "empty",
                                    _ => "normal",

                                }
                            ),
                            &|_, (_, node_data)| {
                                format!("id={} label=\"{}\" style=filled shape=oval fillcolor=\"{}\" fontcolor=black gradientangle=90",
                                        format!("node{}", node_data.orig_graph_idx.index()),
                                        node_data.orig_graph_idx.index(),
                                        match (self.inst_graph.node_has_filtered_children(node_data.orig_graph_idx), 
                                               self.inst_graph.node_has_filtered_parents(node_data.orig_graph_idx)) {
                                            (false, false) => format!("{}", self.colour_map.get(&node_data.quant_idx, 0.7)),
                                            (false, true) => format!("{}:{}", self.colour_map.get(&node_data.quant_idx, 1.0), self.colour_map.get(&node_data.quant_idx, 0.1)),
                                            (true, false) => format!("{}:{}", self.colour_map.get(&node_data.quant_idx, 0.1), self.colour_map.get(&node_data.quant_idx, 1.0)),
                                            (true, true) => format!("{}", self.colour_map.get(&node_data.quant_idx, 0.3)),
                                        },
                                    )
                            },
                        )
                    );
                    log::debug!("Finished building dot output");
                    let link = ctx.link().clone();
                    wasm_bindgen_futures::spawn_local(async move {
                        let graphviz = VizInstance::new().await;
                        let options = viz_js::Options::default();
                        // options.engine = "twopi".to_string();
                        let svg = graphviz
                            .render_svg_element(dot_output, options)
                            .expect("Could not render graphviz");
                        let svg_text = svg.outer_html();
                        link.send_message(Msg::UpdateSvgText(AttrValue::from(svg_text), node_count_decreased));
                    });
                    // only need to re-render once the new SVG has been set
                    false
                } else {
                    ctx.link().send_message(Msg::GetUserPermission);
                    false
                }
            }
            Msg::GetUserPermission => {
                log::debug!("Getting user permission");
                let window = window().unwrap();
                let node_count = self.graph_dim.node_count.to_formatted_string(&Locale::en);
                let edge_count = self.graph_dim.edge_count.to_formatted_string(&Locale::en);
                let message = format!("Warning: The graph you are about to render contains {} nodes and {} edges, rendering might be slow. Do you want to proceed?", node_count, edge_count);
                let result = window.confirm_with_message(&message);
                match result {
                    Ok(true) => {
                        // if the user wishes to render the current graph, we do so
                        log::debug!("Got user permission");
                        ctx.link()
                            .send_message(Msg::RenderGraph(UserPermission::from(true)));
                        false
                    }
                    Ok(false) => {
                        log::debug!("Didn't get user permission");
                        // this resets the filter chain to the filter chain that we had
                        // right before adding the filter that caused too many nodes
                        // to be added to the graph
                        let message = "Would you like to apply the filter without rendering?";
                        let result = window.confirm_with_message(&message);
                        match result {
                            Ok(true) => {
                                self.async_graph_and_filter_chain = true;
                                true
                            }
                            Ok(false) => {
                                self.filter_chain_link
                                    .borrow()
                                    .clone()
                                    .unwrap()
                                    .send_message(FilterChainMsg::SetToPrevious);
                                false
                            }
                            Err(_) => false
                        }
                    }
                    Err(_) => {
                        // Handle the case where an error occurred
                        false
                    }
                }
            }
            Msg::UpdateSvgText(svg_text, node_count_decreased) => {
                log::debug!("Updating svg text");
                if svg_text != self.svg_text {
                    self.svg_text = svg_text;
                    // only if some nodes were deleted, do we deselect all previously selected nodes
                    if node_count_decreased {
                        self.insts_info_link
                            .borrow()
                            .clone()
                            .unwrap()
                            .send_message(GraphInfoMsg::DeselectAll);
                    }
                    true
                } else {
                    false
                }
            }
            Msg::UpdateSelectedNodes(nodes) => {
                self.selected_insts = nodes;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let node_and_edge_count_preview = html! {
            <h4>{format!{"The filtered graph contains {} nodes and {} edges", self.graph_dim.node_count, self.graph_dim.edge_count}}</h4>
        };
        let async_graph_and_filter_chain_warning = if self.async_graph_and_filter_chain {
            html! {<h4 style="color: red;">{"Warning: The filter chain and node/edge count do not correspond to the rendered graph."}</h4>} 
        } else {
            html! {}
        };
        let apply_filter = ctx.link().callback(Msg::ApplyFilter);
        let reset_graph = ctx.link().callback(|_| Msg::ResetGraph);
        let render_graph = ctx.link().callback(Msg::RenderGraph);
        let update_selected_nodes = ctx.link().callback(Msg::UpdateSelectedNodes);
        html! {
            <>
                <div style="flex: 20%; height: 87vh; overflow-y: auto; ">
                <ContextProvider<Vec<InstInfo>> context={self.selected_insts.clone()}>
                    <FilterChain
                        apply_filter={apply_filter.clone()}
                        reset_graph={reset_graph.clone()}
                        render_graph={render_graph.clone()}
                        weak_link={self.filter_chain_link.clone()}
                        dependency={ctx.props().trace_file_text.clone()}
                    />
                </ContextProvider<Vec<InstInfo>>>
                {async_graph_and_filter_chain_warning}
                {node_and_edge_count_preview}
                </div>
                <GraphInfo 
                    weak_link={self.insts_info_link.clone()} 
                    node_info={self.get_node_info.clone()}
                    edge_info={self.get_edge_info.clone()}
                    parser={self.parser.clone()}
                    svg_text={&self.svg_text}
                    {update_selected_nodes}
                />
            </>
        }
    }
}

impl SVGResult {
    /// Deletes the old worker with its queue of messages and creates a new one.
    /// Any enqueued work will still continue to run (there is no way to cancel this
    /// at the moment, see https://github.com/rustwasm/gloo/issues/408) but will not
    /// send a `WorkerOutput` message on completion.
    pub fn reset_worker(&mut self, link: yew::html::Scope<Self>) {
        // The old worker is dropped when overwritten here. Not sure we need the option?
        self.worker = Some(Self::create_worker(link));
    }
    /// Sends an input to the worker to process.
    pub fn send_worker_input(&mut self, input: super::worker::WorkerInput) {
        self.worker.as_mut().unwrap().send(input);
    }

    /// Used internally.
    fn create_worker(link: yew::html::Scope<Self>) -> Box<dyn yew_agent::Bridge<Worker>> {
        use yew_agent::Bridged;
        let cb = std::rc::Rc::new(
            move |e| link.send_message(Msg::WorkerOutput(e))
        );
        Worker::bridge(cb)
    }
}

struct QuantIdxToColourMap {
    total_nr_of_quants: usize,
    coprime: NonZeroUsize,
    shift: usize,
}

impl QuantIdxToColourMap {
    pub fn from(total_nr_of_quants: usize) -> Self {
        Self {
            total_nr_of_quants,
            coprime: Self::find_coprime(total_nr_of_quants),
            // Currently `idx == 0` will always have the same hue of 0, if we do
            // not want this behavior pick a random number here instead.
            shift: 0,
        }
    }

    pub fn get(&self, qidx: &QuantIdx, sat: f64) -> HSVColour {
        let idx = usize::from(*qidx);
        debug_assert!(idx < self.total_nr_of_quants);
        let idx_perm = (idx * self.coprime.get() + self.shift) % self.total_nr_of_quants;
        HSVColour {
            hue: idx_perm as f64 / self.total_nr_of_quants as f64,
            sat,
            val: 0.95,
        }
    }

    fn find_coprime(n: usize) -> NonZeroUsize {
        // Workaround since `unwrap` isn't allowed in const functions.
        const ONE: NonZeroUsize = match NonZeroUsize::new(1) {
            Some(nz) => nz,
            None => [][0],
        };
        let nz = NonZeroUsize::new(n);
        if let Some(nz) = nz {
            primal::Primes::all()
                // Start from 13 since the smaller ones don't permute so nicely.
                .skip(5)
                // SAFETY: returned primes will never be zero.
                .map(|p| unsafe { NonZeroUsize::new_unchecked(p) })
                // Find the first prime that is coprime to `nz`.
                .find(|&prime| nz.get() % prime.get() != 0)
                // Will always succeed since any prime larger than `nz / 2` is
                // coprime. Terminates since `nz != 0`.
                .unwrap()
        } else {
            ONE
        }
    }
}

/// Private module for generating colors
mod colours {
    use std::fmt;

    #[derive(Clone, Copy)]
    pub struct HSVColour {
        pub hue: f64,
        pub sat: f64,
        pub val: f64,
    }

    impl fmt::Display for HSVColour {
        fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
            write!(f, "{} {} {}", self.hue, self.sat, self.val)
        }
    }
}

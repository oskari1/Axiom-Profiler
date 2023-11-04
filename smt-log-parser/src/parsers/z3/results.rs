use std::collections::BTreeMap;

use petgraph::Graph;
use petgraph::graph::NodeIndex;

use super::z3parser::Z3Parser;
use crate::items::*;

impl Z3Parser {
    pub fn get_instantiation_graph(&self) -> (petgraph::Graph<usize, ()>, BTreeMap<usize, usize>) {
        let mut qi_graph = Graph::<usize, ()>::new();
        let is_theory_inst = |d: &Dependency| {
            d.quant_discovered
        }; 
        let fresh_line_nr = |qi_graph: &Graph::<usize, ()>, line_nr: usize| qi_graph.node_weights().all(|&line| line != line_nr);
        let mut node_of_line_nr: BTreeMap<usize, NodeIndex> = BTreeMap::new(); 
        let mut line_nr_of_node: BTreeMap<usize, usize> = BTreeMap::new(); 
        for dep in &self.dependencies {
            if !is_theory_inst(dep) { 
                if let (from, Some(to)) = (dep.from, dep.to) {
                    if fresh_line_nr(&qi_graph, to) {
                        let to_node = qi_graph.add_node(to);
                        node_of_line_nr.insert(to, to_node);
                        line_nr_of_node.insert(to_node.index(), to);
                    }
                    if from > 0 {
                        if fresh_line_nr(&qi_graph, from) {
                            let from_node = qi_graph.add_node(from);
                            node_of_line_nr.insert(from, from_node);
                            line_nr_of_node.insert(from_node.index(), from);
                        }
                        if let (Some(&from_node_idx), Some(&to_node_idx)) = (node_of_line_nr.get(&from), node_of_line_nr.get(&to)) {
                            qi_graph.add_edge(from_node_idx, to_node_idx, ());
                        }
                    }
                }
            }
        }
        (qi_graph, line_nr_of_node)
    }
}
use std::collections::BTreeMap;
use yew::prelude::*;

pub enum GUIAction {
    ParseResult(bool, String, BTreeMap<usize, usize>),
    SetMaxLineNr(i32),
    ReadInput(i32),
}

#[derive(Clone, Debug, PartialEq)]
pub struct GraphState {
    pub parsed_log: bool,
    pub svg_text: String,
    pub line_nr_of_node: BTreeMap<usize, usize>,
    pub max_line_nr: i32,
    pub input: i32,
}

impl Default for GraphState {
    fn default() -> Self {
        Self { 
            parsed_log: false, 
            svg_text: String::new(), 
            line_nr_of_node: BTreeMap::new(), 
            max_line_nr: i32::MAX,
            input: i32::MAX,
        }
    }
}

impl Reducible for GraphState {
    type Action = GUIAction;

    fn reduce(self: std::rc::Rc<Self>, action: Self::Action) -> std::rc::Rc<Self> {
        match action {
            GUIAction::ParseResult(parsed_log, svg_text, line_nr_of_node) => Self {
                parsed_log,
                svg_text, 
                line_nr_of_node, 
                max_line_nr: self.max_line_nr,
                input: self.input,
            }.into(),
            GUIAction::SetMaxLineNr(max_line_nr) => Self {
                parsed_log: self.parsed_log,
                svg_text: self.svg_text.clone(),
                line_nr_of_node: self.line_nr_of_node.clone(),
                max_line_nr,
                input: self.input,
            }.into(),
            GUIAction::ReadInput(input) => Self {
                parsed_log: self.parsed_log,
                svg_text: self.svg_text.clone(),
                line_nr_of_node: self.line_nr_of_node.clone(),
                max_line_nr: self.max_line_nr,
                input,
            }.into(),
        }
    }
}
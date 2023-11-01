use std::{collections::BTreeMap, str::Split};
use fxhash::FxHashMap;
use typed_index_collections::TiVec;

use petgraph::graph::Graph;
// use regex::Regex;

use crate::{items::*, parsers::z3::{VersionInfo, Z3LogParser}};

// Regex constants for parsing quantifier variables and sorts (note the `|` splitting the two patterns)
// const QVAR_REGEX_STR: &str = r"\(;(?P<sort_only>\S+)\)|\(\|(?P<name>\S+)\|\s;\s\|(?P<sort>\S+)\|\)";

#[derive(Debug)]
pub struct Z3Parser {
    pub(super) version_info: Option<VersionInfo>,
    pub(super) idx_map: IdxMap,
    pub(super) terms: TiVec<TermIdx, Term>,             // [namespace => [ID number => Term]]
    pub(super) quantifiers: TiVec<QuantIdx, Quantifier>, // [namespace => [ID number => Quantifier]]
    pub(super) matches: FxHashMap<Fingerprint, Instantiation>, // [match line number => Instantiation]
    pub(super) instantiations: TiVec<InstIdx, Instantiation>, // [line number => Instantiation]
    // pub(super) inst_stack: Vec<(usize, Fingerprint)>, // [(line_no, fingerprint)]
    pub(super) inst_stack: Vec<InstIdx>,
    pub(super) temp_dependencies: FxHashMap<usize, Vec<Dependency>>, // [match line number => Vec<Dependency>]
    // pub(super) eq_expls: BTreeMap<String, EqualityExpl>, // [ID => EqualityExpl from ID]
    // pub(super) fingerprints: BTreeMap<usize, Fingerprint>, // [match_line_number => fingerprint]
    pub(super) dependencies: Vec<Dependency>,
    // pub continue_parsing: Arc<Mutex<bool>>, // continue parsing or not?
    // pub(super) qvar_re: Regex,
    pub line_nr_of_node: FxHashMap<usize, usize>, // [node-idx => line number]
    pub(super) node_of_line_nr: FxHashMap<usize, petgraph::graph::NodeIndex>, // [node-idx => line number]
    pub(super) qi_graph: Graph::<usize, ()>,
}

#[derive(Debug, Default)]
pub struct IdxMap {
    term_map: FxHashMap<TermId, TermIdx>,
    discovered_map: FxHashMap<DiscoveredId, QuantIdx>,
}
impl IdxMap {
    pub fn register_term(&mut self, id: TermIdCow, idx: TermIdx) {
        // The `id` of two different terms may clash and so we may remove
        // a `TermIdx` from the map. This is fine since we want future uses of
        // `id` to refer to the new term and not the old one.
        self.term_map.insert(id.into_owned(), idx);
    }
    pub fn get_term(&self, id: TermIdCow) -> Option<TermIdx> {
        self.term_map.get(&id).copied()
    }
    pub fn discovered_quant(&mut self, id: DiscoveredId, default: impl FnOnce() -> QuantIdx) -> QuantIdx {
        *self.discovered_map.entry(id).or_insert_with(default)
    }
}

impl Z3Parser {
    pub fn version_info(&self) -> Option<&VersionInfo> {
        self.version_info.as_ref()
    }
    pub fn new_term(&mut self, id: TermIdCow, term: Term) -> TermIdx {
        let idx = self.terms.next_key();
        for c in &term.child_ids {
            self.terms[*c].dep_term_ids.push(idx);
        }
        self.terms.push(term);
        self.idx_map.register_term(id, idx);
        idx
    }

    pub fn discovered_quant(&mut self, id: DiscoveredId, method: &str) -> QuantIdx {
        self.idx_map.discovered_quant(id, ||
            self.quantifiers.push_and_get_key(Quantifier {
                kind: QuantKind::Other(method.to_string()),
                num_vars: 0,
                term: None,
                instances: Vec::new(),
                cost: 0.0,
                vars: None,
            })
        )
    }

    #[must_use]
    fn parse_existing_id(&self, id: &str) -> Option<TermIdx> {
        Some(self.idx_map.get_term(TermIdCow::parse(id)?).unwrap())
    }
    #[must_use]
    fn gobble_children(&self, l: Split<'_, char>) -> Option<Vec<TermIdx>> {
        l.map(|id| self.parse_existing_id(id)).collect()
    }
    #[must_use]
    fn gobble_var_names_list(l: Split<'_, char>) -> Option<VarNames> {
        let mut t = Self::gobble_tuples::<true>(l);
        // TODO: if the list can be empty then remove the first `?` and
        // replace with default case.
        let (first, second) = t.next()??;
        if first == "" {
            let tuples = t.map(|t| match t? {
                ("", second) => Some(second.to_string()),
                _ => None,
            });
            let types = [Some(second.to_string())].into_iter().chain(tuples);
            Some(VarNames::TypeOnly(types.collect::<Option<Vec<_>>>()?))
        } else {
            fn strip_bars((first, second): (&str, &str)) -> Option<(String, String)> {
                let first = first.strip_prefix('|')?.strip_suffix('|')?;
                let second = second.strip_prefix('|')?.strip_suffix('|')?;
                Some((first.to_string(), second.to_string()))
            }
            let tuples = t.map(|t| strip_bars(t?));
            let names_and_types = [strip_bars((first, second))].into_iter().chain(tuples);
            Some(VarNames::NameAndType(names_and_types.collect::<Option<Vec<_>>>()?))
        }
    }
    /// Gobble tuples with any of the following forms (`A` and `B` can be empty):
    ///  - `(A;B)`
    ///  - `(A B)`
    ///  - `(A ; B)`
    /// The resulting iterator will contain `None` for any tuples which it failed to parse.
    /// If `FORMS_EQUAL` is true, then it will return `None` for any tuples which have a different
    /// form to the first tuple.
    #[must_use]
    fn gobble_tuples<'a, const FORMS_EQUAL: bool>(mut l: impl Iterator<Item = &'a str>) -> impl Iterator<Item = Option<(&'a str, &'a str)>> {
        let mut spaces = None;
        let mut gobble = move || {
            let Some(first) = l.next() else {
                return Some(None);
            };
            let (first, second) = if first.ends_with(')') {
                let spaces = *spaces.get_or_insert(0);
                if FORMS_EQUAL && spaces != 0 {
                    return None;
                }
                let mut l = first.split(';');
                (l.next()?, l.next()?)
            } else {
                let middle = l.next()?;
                if middle != ";" {
                    let spaces = *spaces.get_or_insert(1);
                    if FORMS_EQUAL && spaces != 1 {
                        return None;
                    }
                    (first, middle)
                } else {
                    let spaces = *spaces.get_or_insert(2);
                    if FORMS_EQUAL && spaces != 2 {
                        return None;
                    }
                    let second = l.next()?;
                    (first, second)
                }
            };
            let t = (first.strip_prefix('(')?, second.strip_suffix(')')?);
            Some(Some(t))
        };
        let inverted_gobble = move |_|
            gobble().map_or(Some(None), |x| x.map(Some));
        std::iter::repeat(()).map_while(inverted_gobble)
    }
    #[must_use]
    fn gobble_id_pairs<'a>(&self, l: impl Iterator<Item = &'a str>) -> Option<Vec<(TermIdx, TermIdx)>> {
        Self::gobble_tuples::<true>(l).map(|t| {
            let (first, second) = t?;
            let first = self.parse_existing_id(first)?;
            let second = self.parse_existing_id(second)?;
            Some((first, second))
        }).collect()
    }
    /// Create a new iterator which will only consume elements from `l` until
    /// it finds `end`. The element `end` will also be consumed but no other elements after that will.
    #[must_use]
    fn iter_until_eq<'a, 's>(l: &'a mut Split<'s, char>, end: &'a str) -> impl Iterator<Item = &'s str> + 'a {
        l.take_while(move |elem| *elem != end)
    }
    #[must_use]
    fn expect_completed<'s>(mut l: impl Iterator<Item = &'s str>) -> Option<()> {
        l.next().map_or(Some(()), |_| None)
    }
}

impl Z3LogParser for Z3Parser {
    fn version_info(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let solver = l.next()?.to_string();
        let version = l.next()?;
        // Return if there is unexpectedly more data
        l.next().map_or(Some(()), |_| None)?;
        let version = semver::Version::parse(version).ok()?;
        println!("{solver} {version}");
        self.version_info = Some(VersionInfo {
            solver,
            version,
        });
        Some(())
    }

    fn mk_quant(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let full_id = l.next().and_then(TermIdCow::parse)?;
        let quant_name = l.next().map(QuantKind::parse)?;
        let num_vars = l.next()?.parse().ok()?;
        let children = self.gobble_children(l)?;
        assert!(!children.is_empty());
        let qidx = self.quantifiers.next_key();
        let term = Term {
            id: full_id.into_owned(),
            kind: TermKind::Quant(qidx),
            meaning: None,
            child_ids: children,
            dep_term_ids: Vec::new(),
            resp_inst: None,
            equality_expls: Vec::new(),
        };
        let tidx = self.new_term(full_id, term);
        let q = Quantifier {
            num_vars,
            kind: quant_name,
            term: Some(tidx),
            instances: Vec::new(),
            cost: 0.0,
            vars: None,
        };
        let qidx2 = self.quantifiers.push_and_get_key(q);
        debug_assert_eq!(qidx, qidx2);
        Some(())
    }

    fn mk_var(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let full_id = l.next().and_then(TermIdCow::parse)?;
        let kind = l.next().and_then(TermKind::parse_var)?;
        // Return if there is unexpectedly more data
        l.next().map_or(Some(()), |_| None)?;
        let term = Term {
            id: full_id.into_owned(),
            kind,
            meaning: None,
            child_ids: Vec::new(),
            dep_term_ids: Vec::new(),
            resp_inst: None,
            equality_expls: Vec::new(),
        };
        self.new_term(full_id, term);
        Some(())
    }

    fn mk_proof_app(&mut self, mut l: Split<'_, char>, is_proof: bool) -> Option<()> {
        let full_id = l.next().and_then(TermIdCow::parse)?;
        let kind = TermKind::parse_proof_app(is_proof, l.next()?);
        // TODO: add rewrite, monotonicity cases
        let children = self.gobble_children(l)?;
        let term = Term {
            id: full_id.into_owned(),
            kind,
            meaning: None,
            child_ids: children,
            dep_term_ids: Vec::new(),
            resp_inst: None,
            equality_expls: Vec::new(),
        };
        self.new_term(full_id, term);
        Some(())
    }

    fn attach_meaning(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let id = l.next()?;
        let theory = l.next()?.to_string();
        let value = l.collect::<Vec<_>>().join(" ");
        let meaning = Meaning {
            theory,
            value,
        };
        let idx = self.parse_existing_id(id)?;
        if let Some(old) = &self.terms[idx].meaning {
            assert_eq!(old, &meaning);
        } else {
            self.terms[idx].meaning = Some(meaning);
        }
        Some(())
    }

    fn attach_var_names(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let id = l.next()?;
        let var_names = Self::gobble_var_names_list(l)?;
        let tidx = self.parse_existing_id(id)?;
        let qidx = self.terms[tidx].kind.quant_idx().unwrap();
        assert!(self.quantifiers[qidx].vars.is_none());
        self.quantifiers[qidx].vars = Some(var_names);
        Some(())
    }

    fn attach_enode(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let idx = self.parse_existing_id(l.next()?)?;
        // TODO
        let _some_number = l.next()?.parse::<usize>().ok()?;
        // Return if there is unexpectedly more data
        l.next().map_or(Some(()), |_| None)?;
        // TODO: how should we handle an empty `inst_stack`?
        if let Some(inst) = self.inst_stack.last() {
            self.terms[idx].resp_inst = Some(*inst);
            self.instantiations[*inst].yields_terms.push(idx);
        }
        Some(())
    }

    fn eq_expl(&mut self, mut l: Split<'_, char>) -> Option<()> {
        let idx = self.parse_existing_id(l.next()?)?;
        let kind = l.next()?;
        let eq_expl = {
            let mut kind_dependent_info = Self::iter_until_eq(l.by_ref(), ";");
            match kind {
                "root" => EqualityExpl::Root { id: idx },
                "lit" => {
                    let eq = kind_dependent_info.next()?;
                    let eq = self.parse_existing_id(eq)?;
                    Self::expect_completed(kind_dependent_info)?;
                    let to = self.parse_existing_id(l.next()?)?;
                    EqualityExpl::Literal { from: idx, eq, to }
                }
                "cg" => {
                    let arg_eqs = self.gobble_id_pairs(kind_dependent_info)?;
                    let to = self.parse_existing_id(l.next()?)?;
                    EqualityExpl::Congruence { from: idx, arg_eqs, to }
                    // For each pair (#A #B), reconstruct dependent equality explanations connecting #A to #B ...
                }
                "th" => {
                    let theory = kind_dependent_info.next()?.to_string();
                    Self::expect_completed(kind_dependent_info)?;
                    let to = self.parse_existing_id(l.next()?)?;
                    EqualityExpl::Theory { from: idx, theory, to }
                },
                "ax" => {
                    Self::expect_completed(kind_dependent_info)?;
                    let to = self.parse_existing_id(l.next()?)?;
                    EqualityExpl::Axiom { from: idx, to }
                },
                kind => {
                    let args = kind_dependent_info.map(String::from).collect();
                    let to = self.parse_existing_id(l.next()?)?;
                    EqualityExpl::Unknown {
                        kind: kind.to_string(),
                        from: idx,
                        args,
                        to,
                    }
                }
            }
        };
        // Return if there is unexpectedly more data
        l.next().map_or(Some(()), |_| None)?;
        // TODO: can there ever be more than one per term?
        if !self.terms[idx].equality_expls.contains(&eq_expl) {
            // TODO: handle `push` and `pop` properly to avoid duplicates?
            self.terms[idx].equality_expls.push(eq_expl);
        }
        Some(())
    }

    fn new_match(&mut self, mut l: Split<'_, char>, line_no: usize) -> Option<()> {
        let fingerprint = l.next().and_then(Fingerprint::parse)?;
        let idx = self.parse_existing_id(l.next()?)?;
        let quant = self.terms[idx].kind.quant_idx().unwrap();
        let pattern = self.parse_existing_id(l.next()?)?;
        let bound_terms = Self::iter_until_eq(&mut l, ";").map(
            |id| self.parse_existing_id(id)
        ).collect::<Option<Vec<_>>>()?;

        self.temp_dependencies.insert(line_no + 1, Vec::new());

        let mut equality_expls = Vec::new();
        let mut blamed_terms = Vec::new();
        let mut dep_instantiations = Vec::new();
        while let Some(word) = l.next() {
            if let Some(first_term) = word.strip_prefix('(') {
                // assumes that if we see "(#A", the next word in the split is "#B)"
                let second_term = l.next()?.strip_suffix(')')?;
                let fidx = self.parse_existing_id(first_term)?;
                let sidx = self.parse_existing_id(second_term)?;
                if fidx != sidx {
                    let eqs = &self.terms[fidx].equality_expls;
                    for eq in eqs.iter().filter(|eq| eq.from_to() == (fidx, sidx)) {
                        // TODO: why could this never iterate, why could it iterate more than once?
                        match eq {
                            EqualityExpl::Root { .. } => (),
                            EqualityExpl::Literal { eq, .. } =>
                                if let Some((inst, dep)) = self.add_dependency(
                                    *eq,
                                    DepType::Equality,
                                ) {
                                    self.temp_dependencies.get_mut(&(line_no + 1)).unwrap().push(dep);
                                    dep_instantiations.push(inst);
                                },
                            EqualityExpl::Congruence { .. } => (), // TODO: need to implement this?
                            EqualityExpl::Theory { .. } => (),
                            EqualityExpl::Axiom { .. } => (),
                            EqualityExpl::Unknown { .. } => (),
                        }
                    }
                    equality_expls.push(fidx);
                }
                blamed_terms.push(BlamedTermItem::Pair(fidx, sidx));
            } else {
                let widx = self.parse_existing_id(word)?;
                if let Some((inst, dep)) = self.add_dependency(
                    widx,
                    DepType::Term,
                ) {
                    self.temp_dependencies.get_mut(&(line_no + 1)).unwrap().push(dep);
                    dep_instantiations.push(inst);
                }
                blamed_terms.push(BlamedTermItem::Single(widx));
            }
        }

        // let mut blamed_terms: Vec<BlamedTermItem> = Vec::new();
        // let mut equality_expls = Vec::new();
        // let mut dep_instantiations = Vec::new();
        // self.temp_dependencies.insert(line_no + 1, Vec::new());
        // for (i, word) in l[semicolon_index + 1..].iter().enumerate() {
        //     if let Some(first_term) = word.strip_prefix('(') {
        //         // assumes that if we see "(#A", the next word in the split is "#B)"
        //         let next_word = l[semicolon_index + i + 2];
        //         let second_term = next_word.strip_suffix(')').unwrap();
        //         if first_term != second_term {
        //             let eq = self.eq_expls.get(first_term).unwrap();
        //             equality_expls.push(first_term.to_string());
        //             use crate::items::EqualityExpl::*;
        //             match eq {
        //                 Root { .. } => {}
        //                 Literal { eq: from, .. } => {
        //                     // let from = TermIdCow::parse(&**from);
        //                     Z3Parser::add_dependency(
        //                         &self.terms,
        //                         *from,
        //                         &mut self.instantiations,
        //                         &mut self.temp_dependencies,
        //                         &mut dep_instantiations,
        //                         DepType::Equality,
        //                         line_no + 1,
        //                     );
        //                 }
        //                 Congruence { .. } => {} // need to implement this?
        //                 Theory { .. } => {}
        //                 Axiom { .. } => {}
        //                 Unknown { .. } => {}
        //             }
        //         }
        //         blamed_terms.push(BlamedTermItem::Pair(
        //             first_term.to_string(),
        //             next_word[..next_word.len() - 1].to_string(),
        //         ));
        //     } else if !word.ends_with(')') {
        //         let word = TermIdCow::parse(*word).into_owned();
        //         Z3Parser::add_dependency(
        //             &mut self.terms,
        //             &word,
        //             &mut self.instantiations,
        //             &mut self.temp_dependencies,
        //             &mut dep_instantiations,
        //             DepType::Term,
        //             line_no + 1,
        //         );

        //         blamed_terms.push(BlamedTermItem::Single(word));
        //     }
        // }
        // let tidx = self.parse_existing_id(id);
        if dep_instantiations.is_empty() {
            self.add_blank_dependency_if_needed(
                quant,
                false,
                line_no + 1,
            );
        }
        let instant = Instantiation {
            match_line_no: line_no + 1,
            line_no: None,
            fingerprint,
            resulting_term: None,
            z3_gen: None,
            cost: 1.0,
            quant,
            quant_discovered: false,
            pattern: Some(pattern),
            yields_terms: Vec::new(),
            bound_terms,
            blamed_terms,
            equality_expls,
            dep_instantiations,
        };
        self.matches.insert(fingerprint, instant);
        Some(())
    }

    fn inst_discovered(&mut self, mut l: Split<'_, char>, line_no: usize) -> Option<()> {
        let method = l.next()?;
        let fingerprint = Fingerprint::parse(l.next()?)?;
        let mut dep_instantiations = Vec::new();
        self.temp_dependencies.insert(line_no + 1, Vec::new());
        let (quant, bound_terms, blamed_terms) = match method {
            "theory-solving" => {
                let ts_id = l.next().and_then(TermIdCow::parse)?;
                let id = DiscoveredId::TheorySolving(ts_id.into_owned());
                let quant = self.discovered_quant(id, method);
                let maybe_semi = l.next(); // Skip `;`
                // Return if there is unexpectedly some string other than `;`
                maybe_semi.filter(|s| *s != ";").map_or(Some(()), |_| None)?;

                let blamed_terms = l
                        .map(|id| {
                            let id = self.parse_existing_id(id)?;
                            if let Some((inst, dep)) = self.add_dependency(
                                id,
                                DepType::Term,
                            ) {
                                self.temp_dependencies.get_mut(&(line_no + 1)).unwrap().push(dep);
                                dep_instantiations.push(inst);
                            };
                            Some(BlamedTermItem::Single(id))
                        });
                (quant, Vec::new(), blamed_terms.collect::<Option<Vec<_>>>()?)
            }
            "MBQI" => {
                let id = DiscoveredId::MBQI;
                let quant = self.discovered_quant(id, method);
                let bound_terms = l.map(|id| self.parse_existing_id(id));
                (quant, bound_terms.collect::<Option<Vec<_>>>()?, Vec::new())
            }
            _ => return None,
        };
        if dep_instantiations.is_empty() {
            self.add_blank_dependency_if_needed(
                quant,
                true,
                line_no + 1,
            );
        }
        let instant = Instantiation {
            match_line_no: line_no + 1,
            line_no: None,
            fingerprint,
            resulting_term: None,
            z3_gen: None,
            cost: 1.0,
            quant,
            quant_discovered: true,
            pattern: None,
            yields_terms: Vec::new(),
            bound_terms,
            blamed_terms,
            equality_expls: Vec::new(),
            dep_instantiations,
        };

        self.matches.insert(fingerprint, instant);
        Some(())
    }

    fn instance(&mut self, mut l: Split<'_, char>, line_no: usize) -> Option<()> {
        let fingerprint = l.next().and_then(Fingerprint::parse)?;

        let mut inst = self
            .matches
            .get(&fingerprint)
            .expect("Fingerprint should be in instantiations")
            .clone();
        inst.line_no = Some(line_no + 1);
        let qidx = inst.quant;

        let mut next = l.next();
        if let Some(idx) = next.and_then(|id| self.parse_existing_id(id)) {
            assert!(inst.resulting_term.is_none());
            inst.resulting_term = Some(idx);
            next = l.next();
        }
        match (next, l.next()) {
            (None, None) => (),
            (Some(";"), Some(z3_gen)) => {
                inst.z3_gen = Some(z3_gen.parse().ok()?);
            }
            _ => return None,
        }
        let iidx = self.instantiations.push_and_get_key(inst);

        self.inst_stack.push(iidx);
        let quantifier = &mut self.quantifiers[qidx];
        quantifier.instances.push(iidx);
        quantifier.cost += 1.0;
        Some(())
    }

    fn end_of_instance(&mut self) {
        let iidx = self.inst_stack.pop().unwrap();
        let inst = &mut self.instantiations[iidx];
        let deps = self.temp_dependencies.get_mut(&inst.match_line_no).unwrap();
        deps.iter_mut().for_each(|dep| {
            dep.to = inst.line_no;
            dep.quant = inst.quant;
        });
        self.dependencies.append(deps);
    }
}

impl Default for Z3Parser {
    /// Creates a new Z3Parser
    fn default() -> Z3Parser {
        Z3Parser {
            version_info: None,
            terms: TiVec::new(),
            quantifiers: TiVec::new(),
            matches: FxHashMap::default(),
            instantiations: TiVec::new(),
            inst_stack: Vec::new(),
            temp_dependencies: FxHashMap::default(),
            // eq_expls: BTreeMap::new(),
            // fingerprints: BTreeMap::new(),
            dependencies: Vec::new(),
            // continue_parsing: Arc::new(Mutex::new(true)),
            // qvar_re: Regex::new(QVAR_REGEX_STR).unwrap(),
            line_nr_of_node: FxHashMap::default(),
            node_of_line_nr: FxHashMap::default(),
            qi_graph: Graph::<usize, ()>::new(),
            idx_map: IdxMap::default(),
        }
    }
}

impl Z3Parser {
    /// Add a (partial) blank instantiation dependency. Used to keep track of instantiations dependent on no others.
    fn add_blank_dependency_if_needed(
        &mut self,
        quant: QuantIdx,
        quant_discovered: bool,
        match_line: usize,
    ) {
        let dep = Dependency {
            from: match_line,
            to: None,
            blamed: None,
            dep_type: DepType::None,
            quant,
            quant_discovered,
        };
        self.temp_dependencies.get_mut(&match_line).unwrap().push(dep);
    }

    /// Add a (partial) instantiation dependency from the quantifier that instantiated the term with ID `from`, if there is one.
    ///
    /// Since this is done during a `"[match]"` or `"[inst-discovered]"` line, the instantiation's actual line number is not available yet.
    /// Additionally, some matches are not instantiated at all.
    #[must_use]
    fn add_dependency(
        &self,
        // terms: &TiVec<TermIdx, Term>,
        from_term: TermIdx,
        // instantiations: &TiVec<InstIdx, Instantiation>,
        // dep_insts: &mut Vec<usize>,
        dep_type: DepType,
        // match_line: usize,
        // temp_deps: &mut BTreeMap<usize, Vec<Dependency>>,
    ) -> Option<(InstIdx, Dependency)> {
        let eq_term = &self.terms[from_term];
        eq_term.resp_inst.map(|inst| {
            let instantiation = &self.instantiations[inst];
            let dep = Dependency {
                from: instantiation.line_no.unwrap(),
                to: None,
                blamed: Some(from_term),
                dep_type,
                quant: instantiation.quant,
                quant_discovered: instantiation.quant_discovered,
            };
            (inst, dep)
        })
    }
}

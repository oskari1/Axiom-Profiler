fn main() -> Result<(), Box<dyn std::error::Error>> {
    vergen::EmitBuilder::builder().all_git().emit()?;
    Ok(())
}

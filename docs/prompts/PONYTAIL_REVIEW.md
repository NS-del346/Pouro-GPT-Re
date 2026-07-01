# Pourō-GPT Re — Ponytail Review Prompt

Recommended model:
Ponytail-compatible review mode; use `lite` by default and `full` only for a targeted local refactor.

Reason:
The goal is to identify unnecessary dependencies, duplicate abstractions, and oversized diffs without reducing clarity or deleting safety-critical logic.

Task:
Review the current tested diff. Suggest simplifications, but do not apply them automatically. Classify each suggestion by benefit, risk, and whether it conflicts with Pourō authority.

Inputs:
- current diff
- tests and CI results
- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/context/07_AI_ORCHESTRATION_TOOLING.md`
- `docs/context/11_ACCEPTANCE_QA.md`
- `docs/context/17_BREW_RUNNER_RELIABILITY.md`

Expected output:
- removable duplication candidates
- unnecessary dependency candidates
- safe simplifications
- rejected simplifications with authority reason
- final recommendation: adopt / partially adopt / reject

Save output to:
- `docs/ai-reports/YYYY-MM-DD-ponytail-review.md`

Acceptance criteria:
- `ultra` is not used.
- no code golf or abbreviated naming.
- no Recipe Truth, source metadata, validation, snapshot, accessibility, recovery, PWA update, or test removal.
- suggestions remain advisory and human-reviewed.

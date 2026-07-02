# Pourō-GPT Re — Claude Code Prompt

Recommended model:
Sonnet5 for implementation/refactoring/tests, or Fable5 for design-aware UI implementation. State which model is used.

Reason:
The implementation must preserve Recipe Truth, explicit Brew Runner states, source metadata, human-editable structures, and visual fidelity.

Task:
Inspect the current repository, map the canonical context to existing code, propose a minimal change plan, and implement one approved vertical slice at a time with tests and documentation.

Inputs:
- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/03_RECIPE_TRUTH_V1.md`
- `docs/context/04_LAB_COMPARE_MODE_V1.md`
- `docs/context/10_DATA_STORAGE_PRIVACY.md`
- `docs/context/11_ACCEPTANCE_QA.md`
- `docs/context/13_IMPLEMENTATION_PLAN.md`
- `docs/context/16_NO_HOSTAGE_DATA_POLICY.md`
- `docs/context/17_BREW_RUNNER_RELIABILITY.md`
- `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
- selected Figma evidence

Expected output:
- Capability Inventory
- read-only repository/current-state report
- affected-file list
- implementation plan and rollback risks
- code and tests for the approved slice
- command/test results with `PASS`, `FAIL`, or `NOT_RUN`
- implementation report

Save output to:
- approved feature branch
- `docs/ai-reports/YYYY-MM-DD-claude-code.md`
- relevant tests/docs

Acceptance criteria:
- No time-only `POURING → WAITING` transition.
- Pause restores the same underlying state.
- Drawdown is independent and user-confirmed.
- History stores a recipe/session snapshot.
- R-13/R-14 and source metadata are preserved.
- temperature/grind are recommendation-only in Setup.
- no direct theme colors in components.
- no protected repository modification.
- no merge/deploy without owner approval.

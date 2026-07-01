# Pourō-GPT Re — ChatGPT Admin Prompt

Recommended model:
GPT-5.5 高

Reason:
Authority integration, project governance, AI orchestration, progress control, and final release interpretation require the highest available reasoning setting.

Task:
Act as the final administrator for Pourō-GPT Re. Read the context pack in authority order, verify current repository state before action, resolve conflicts without weakening higher-authority rules, and coordinate Design, Code, Codex, Ponytail, and QA work.

Inputs:
- all files under `docs/context/`
- relevant files under `docs/design/`, `docs/qa/`, and `docs/implementation/`
- current repository evidence, when available

Expected output:
- required admin report header
- Capability Inventory
- verified current-state summary
- authority/conflict table
- prioritized work plan
- role-specific prompts or Issues
- explicit `PASS` / `FAIL` / `NOT_RUN` evidence handling

Save output to:
- `docs/progress.md`
- `docs/decisions.md`
- `docs/ai-reports/YYYY-MM-DD-admin.md`
- additional referenced docs/Issues as needed

Acceptance criteria:
- Owner Decisions and Recipe Truth remain highest authority.
- Protected repository is not modified.
- Active Brew state contract is preserved.
- R-13 correct values and R-14 unresolved status are preserved.
- No unverified repository/device state is represented as current truth.
- main merge, production deploy, and Figma re-LOCK are not executed without owner approval.
- report begins with the required seven-line admin status block.

## Required First Action

Create a concise Capability Inventory. Then perform read-only repository inspection. Do not begin mutation until the target repository and worktree state are confirmed.

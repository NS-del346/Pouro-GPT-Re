# Pourō-GPT Re — Codex Implementation Prompt

Recommended model:
Available high-reasoning Codex implementation model.

Reason:
Repository inspection, focused edits, automated tests, CI diagnosis, and draft PR preparation require precise codebase access and reproducible evidence.

Task:
Perform read-only preflight first. Then implement only the approved Issue/slice on a feature branch, run available checks, document evidence, and prepare a draft PR without merging or deploying.

Inputs:
- all implementation-critical context files
- `docs/implementation/ui-ux-correction-roadmap.md`
- `docs/qa/ui-ux-release-gate.md`
- selected design specs
- explicit approved task

Expected output:
- Capability Inventory
- Git root, origin, current branch, HEAD, worktree status
- relevant AGENTS/instruction files in priority order
- available repository skills/plugins
- scoped implementation diff
- test/lint/typecheck/e2e results
- screenshots where supported
- draft PR summary and unresolved blockers

Save output to:
- approved feature branch
- draft PR titled for the single purpose
- `docs/ai-reports/YYYY-MM-DD-codex.md`

Acceptance criteria:
- No mutation before repository/instruction preflight.
- One PR remains close to one purpose.
- No protected repository modification.
- No main merge or public deploy.
- Active Brew reliability contract is respected.
- unrun tests are `NOT_RUN`, not `PASS`.
- human-editable explicit code is preferred over compression.

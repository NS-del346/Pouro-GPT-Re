# Pourō-GPT Re — Codex Implementation Prompt

Recommended model:
Available high-reasoning Codex implementation model.

Reason:
Repository inspection, focused edits, automated tests, CI diagnosis, and draft PR preparation require precise codebase access and reproducible evidence.

Task:
Perform read-only authority, Git-state, and executor-capability preflight first. For an approved Fast Track low-risk PR, implement only the bounded Issue/slice on the approved feature branch, run required checks, stage, commit, push, create or update a Draft PR, and complete a read-only remote audit. Stop before Ready for Review, merge, deployment, or branch deletion.

Inputs:
- all implementation-critical context files
- `docs/implementation/ui-ux-correction-roadmap.md`
- `docs/qa/ui-ux-release-gate.md`
- selected design specs
- explicit approved task
- approved repository, branch, base SHA, file scope, validation, rollback, and Draft PR boundary

Expected output:
- Capability Inventory
- Git root, origin, current branch, HEAD, worktree status
- relevant AGENTS/instruction files in priority order
- available repository skills/plugins
- scoped implementation diff
- test/lint/typecheck/e2e results
- screenshots where supported
- commit SHA and remote branch SHA
- draft PR URL, summary, and unresolved blockers
- independent read-only audit handoff or result

Save output to:
- approved feature branch
- draft PR titled for the single purpose
- `docs/ai-reports/YYYY-MM-DD-codex.md`

Acceptance criteria:
- No mutation before repository/instruction and executor-capability preflight.
- A capability-deficient runtime must not begin implementation.
- Fast Track mutation is limited to the exact bounded Owner approval.
- One PR remains close to one purpose.
- No protected repository modification.
- No Ready for Review, main merge, public deploy, branch deletion, force push, or destructive operation.
- Active Brew reliability contract is respected.
- unrun tests are `NOT_RUN`, not `PASS`.
- human-editable explicit code is preferred over compression.

Retry and stop policy:
- DNS timeout, HTTP 429／5xx, package registry timeout, and browser binary download timeout may be retried up to two times using the same scope and method.
- Do not silently switch transport, package manager, API, repository, branch, or implementation method.
- Stop immediately for permission denial, authority conflict, dirty worktree, unexpected branch／HEAD, secret request, out-of-scope change, or destructive requirement.

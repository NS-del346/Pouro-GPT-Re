# Pourō-GPT Re — QA / Red Team Prompt

Recommended model:
GPT-5.5 高, Claude Sonnet5, or equivalent high-reasoning QA model with browser/device evidence capability. State the model and tools used.

Reason:
The product requires adversarial verification of state transitions, data integrity, accessibility, responsive behavior, offline recovery, and approval boundaries.

Task:
Audit the implementation against canonical context. Attempt to break the Active Brew state model, snapshot recovery, import/export, responsive layouts, accessibility, and governance controls.

Inputs:
- all authority context files
- `docs/qa/ui-ux-release-gate.md`
- implementation diff/build
- test results and screenshots

Expected output:
- Capability Inventory
- matrix of `PASS`, `FAIL`, `NOT_RUN`
- device/viewport/browser/PWA mode
- reproducible steps for failures
- screenshot/video evidence references
- blocker severity and release recommendation

Save output to:
- `docs/ai-reports/YYYY-MM-DD-qa-red-team.md`
- linked evidence directory

Acceptance criteria:
- time-only pour completion is tested and blocked.
- Pause vs Waiting and Drawdown are tested independently.
- 5-pour disclosure, Setup recommendation-only policy, Toast flow, and notification-toggle clipping are checked.
- physical iPhone, VoiceOver, and Reduced Motion remain `NOT_RUN` unless actually performed.
- no current-state claim is made without evidence.

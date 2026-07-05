# Implementation Plan

## Governing Rule

Repository inspection is the first implementation action. Historical branch/PR notes are not current truth until verified.

## Gate 5A Canonical Implementation Plan

This section supersedes older unqualified Active Brew roadmap language. It records planning authority only; it does not authorize runtime source changes, Recipe Truth edits, production Figma mutation, deploy, release, or PR #10 mutation.

```yaml
planning_source: POURO_GATE5A_FINAL_IMPLEMENTATION_PLANNING_PACKAGE_REV2_20260705.zip
planning_source_sha256: F4F090BDADCD14B3731A20D13ED3A178FCE53FF0222219FA079F23437F803177
Gate_5A_independent_verdict: PASS_TO_IMPLEMENTATION_AUTHORIZATION
first_mutation: PR-00_DOCS_ONLY_CANONICALIZATION
```

Dependency order:

```text
PR-00 Canonical authority
  ↓
PR-01 Mode/provenance/domain contracts
  ↓
PR-02 Clock and absolute timeline
  ├─ PR-03 BREW scheduled engine
  └─ PR-04A PR #10 LAB transition-reducer foundation
         ↓
      PR-04B LAB event-engine completion
         ↓
PR-05 Storage repositories/schema
  ├─ PR-06 BREW Finish/Journal/BREW LOG
  ├─ PR-07 LAB Setup/Active Brew
  └─ PR-08 LAB Evaluation/LAB LOG
         ↓
PR-09 Notifications/Cues/Accessibility
PR-10 Profiles/Tolerance
PR-11 Recipe Version/My Recipe
         ↓
PR-12 Mode navigation/The Instrument integration
         ↓
PR-13 Integrated QA/Offline readiness
```

Mode-specific execution:

- BREW is `APP_SCHEDULED`: state is derived from an absolute Recipe Timeline, pause offset, same-process background catch-up, stale-notification guards, and idempotent scheduled completion. BREW must not claim actual pour-start, actual pour-complete, or physical sensing.
- LAB is `USER_CONFIRMED`: events come from explicit user confirmation or user-entered external measurements. LAB owns actual-event provenance, event correction, interruption, and incomplete-save semantics.
- Shared state labels are allowed only as display vocabulary. A universal Active Brew reducer is prohibited.

PR-04 split:

- PR-04A: re-scope the existing Draft PR #10 branch to LAB transition-reducer foundation. It may rename reducer/action/result symbols to LAB-specific vocabulary and retain deterministic transition tests, invalid-pair rejection, confirmed WAITING skip, and terminal FINISH protection.
- PR-04A excludes persistence, event log, Undo, Correction, Interruption, UI, notifications, physical elapsed tracking, and derived validity.
- PR-04B: complete the LAB event engine with append-only event log, stable event IDs/provenance, WAITING auto-completion to `READY_FOR_NEXT`, explicit next-pour start, Skip with deviation retention, Undo-last-event, Correction lineage, Interruption intervals, duplicate-event/order guards, physical elapsed-time continuity, and derived validity inputs for later evaluation.

Acceptance traceability:

| Requirement                                     |                           Planned PR | Evidence                                                  |
| ----------------------------------------------- | -----------------------------------: | --------------------------------------------------------- |
| BREW automatic Recipe Timeline                  |                             PR-02/03 | deterministic timeline and pause-offset tests             |
| scheduled BREW completion snapshot              |                             PR-03/05 | idempotency test                                          |
| LAB transition foundation / PR #10 re-scope     |                               PR-04A | exact-diff and reducer tests                              |
| LAB append-only event engine                    |                               PR-04B | ordering/provenance tests                                 |
| WAITING auto-completes only to `READY_FOR_NEXT` |                               PR-04B | clock/event tests                                         |
| next pour requires explicit start               |                           PR-04A/04B | reducer/event tests                                       |
| Undo / Skip / Correction / Interruption         |                               PR-04B | reversible-event, deviation, lineage, interruption tests  |
| LAB Setup/Active Brew UI                        |         PR-07 after PR-04B and PR-05 | UI/manual-event capture evidence                          |
| LAB Evaluation/LAB LOG                          | PR-08 after PR-04B, PR-05, and PR-07 | UI/domain and cross-link tests                            |
| Recipe Version/My Recipe                        |                                PR-11 | explicit lineage/adoption tests; no Recipe Truth mutation |

Completion statuses:

- `SCHEDULE_COMPLETE`
- `MANUAL_END_COMPLETE`
- `EARLY_END_SAVED`
- `USER_CONFIRMED_COMPLETE`
- `LAB_INCOMPLETE_SAVED`

Storage boundary:

- Domain code depends on repository interfaces, not direct `localStorage`.
- One immutable Brew Snapshot per `brew_run_id`.
- Journal, tags, favorites, LAB evaluation, measurement values, hypotheses, and comparison interpretation are editable linked layers.
- Unknown existing keys must not be silently overwritten, migrations preserve rollback copies, and missing fields surface as `UNVERIFIED` rather than invented data.

## Current Known Notes

```yaml
status: UNVERIFIED
PR_26:
  historical_branch: feature/generated-recipe-inputs
  historical_purpose: generated recipe inputs
PR_31:
  historical_branch: feature/grinder-crosswalk-converter-v2
  historical_purpose: grinder crosswalk converter
production_approval: not evidenced
```

## Phase 0 — Baseline and Foundations

1. Capability Inventory
2. Verify Git root, origin, branch, HEAD, worktree, CI scripts
3. Load authority context
4. Audit Recipe Truth and source metadata
5. Establish semantic theme tokens
6. Establish Motion Foundation
7. Establish Iconoir common-icon layer
8. Confirm storage/repository abstraction

## UI/UX Correction Sequence

The sequence below remains a UI/UX grouping view. It is subordinate to the Gate 5A PR dependency order above.

```text
01 Motion Foundation
02 Iconoir Common Icons
03 Home Redesign
04 Setup Source Alignment
05 Preview Clarity
06 Active Brew State Model
07 Finish / History Metadata
08 Tools / Settings Separation
09 App Icon Redesign — DEFERRED
10 Research-backed Brew Advice
11 Final QA
```

## Dependencies

```text
Motion
├─ Home
└─ Active Brew

Iconoir
├─ Home
├─ Active Brew
└─ Tools / Settings

Setup
└─ Preview
   └─ Active Brew
      └─ Finish / History

Finish / History
└─ Brew Advice research
```

## Product Phases

### Phase 1 — Core Vertical Slice

- core four-method Home
- Setup with dose/ratio/roast and recommendation-only temperature/grind
- Preview with complete neutral step list
- Active Brew explicit state machine
- Finish save
- Home Toast
- History snapshot and Brew Again

### Phase 2 — Data and Additional Functions

- additional methods governed by Recipe Truth
- My Recipe CRUD and restore
- JSON import/export with preview and validation
- grinder equivalency in Tools
- responsive/accessibility improvements

### Phase 3 — LAB and Theme

- dark-mode polish
- LAB Compare v1 data model and one-variable validation
- baseline/candidate flow
- evaluation, result, and next hypothesis

### Phase 4 — Platform and Monetization Abstraction

- entitlement/ad interfaces without interruptive placement
- native-ready adapters
- notification, haptics, wake-lock research/implementation as supported

## Release-Blocking Work

- Active Brew cannot time-transition from Pouring to Waiting
- Pause/Waiting separation
- independent Drawdown
- R-13 correction and R-14 unresolved labeling
- source metadata implementation
- safe import/export
- required viewport QA
- physical iPhone and VoiceOver evidence or explicit `NOT_RUN`
- no notification-toggle clipping

## Approval Gates

Do not:

- merge to main
- deploy publicly
- final re-LOCK/publish Figma

without explicit owner approval.

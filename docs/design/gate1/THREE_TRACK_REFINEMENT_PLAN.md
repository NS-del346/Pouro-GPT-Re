# Gate 1 Three-Track Refinement Plan

Status: `READY_AFTER_CURRENT_GATE1_AUTHORITY_REPAIR`  
Research input: `POURO_GPT_RE_UIUX_RESEARCH_FINAL_PACKAGE_20260703.zip`

## Boundary

```yaml
tracks:
  - AB02_REFERENCE_CALIPER
  - AB04_POUR_CARTOGRAPHER
  - POURO_FABLE5_REFERENCE_DIRECTION

rules:
  refine_independently: true
  refine_in_parallel: true
  equal_depth: true
  winner: prohibited
  ranking: prohibited
  hybrid: prohibited
  recipe_truth_change: prohibited
```

The current six-concept Gate 1 board remains a read-only comparison archive. The three-track refinement does not rewrite that baseline.

## Prerequisite

Before new high-fidelity refinement:

1. Complete the pending R-13 authority repair.
2. Verify all corrected Gate 1 numerical fixtures.
3. Confirm no obsolete R-13 value remains in product UI, annotations, or registers.
4. Do not use unrepaired artifacts as a refinement source.

## Open Owner decisions

The following remain `OPEN` or `OWNER_DECISION_REQUIRED` and are not implementation authority:

| ID | Scope | Decision |
|---|---|---|
| OD-01 | AB02 | Primary value: water, elapsed time, or context-dependent hierarchy |
| OD-02 | AB04 | Route-rail density and whole-route visibility |
| OD-03 | Fable5 | Secondary English usage |
| OD-04 | Shared | WAITING skip availability and deviation logging |
| OD-05 | Shared | Resumable snapshot versus terminal partial record |
| OD-06 | Shared | Drawdown confirmation to Finish transition |
| OD-07 | Shared | Frequency of non-auto-advance explanation |

Monetization interruption during Active Brew is already resolved by higher Owner authority and is not reopened here.

## Phase 1 — Track-internal micro-variants

```yaml
AB02:
  - water_target_primary
  - elapsed_time_primary
  - context_dependent_primary

AB04:
  - always_compact
  - context_expandable
  - current_and_next_only

Fable5:
  - no_secondary_English
  - brand_level_English_only
```

These are variants within each track, not cross-track hybrids.

## Phase 2 — Shared interaction decision sheets

Prepare explicit diagrams and decision evidence for:

- WAITING skip
- recovery snapshot
- terminal partial record
- drawdown confirmation to Finish
- non-auto-advance explanation

## Phase 3 — Equal-depth high-fidelity refinement

Each track must provide the same six frames:

1. `F01_POURING_BASE`
2. `F02_PAUSED_OVERLAY`
3. `F03_WAITING_NON_POUR`
4. `F04_DRAWDOWN_CONFIRMATION`
5. `F05_TEN_POUR_DENSITY`
6. `F06_LARGE_TEXT_STRESS`

```yaml
tracks: 3
frames_per_track: 6
new_refined_frames: 18
base_viewport: 375x667
```

Each track also provides:

- copy rationale
- state-contract checklist
- accessibility annotation sheet
- motion annotation sheet
- implementation-complexity sheet
- unresolved register
- provenance sheet

## Test priority

### P0 — Before visual lock

- POURING never advances from time alone.
- Pause remains an overlay and resumes the same state and step.
- DRAWDOWN remains independent and user-confirmed.
- Non-pour states omit water quantity.
- Duplicate taps do not imply duplicate transitions.
- Japanese copy comprehension is tested separately from visual preference.

Priority copy comparisons include:

- `注ぎ終えた` / `注ぎ終わった` / `この注ぎを終える`
- `落ちきった` / `お湯が落ちきった` / `抽出を完了`
- `工程` / `ステップ`
- `注湯中` / `注いでいます`

No provisional copy becomes canonical from researcher judgment alone.

### P1 — During refinement

Required viewports:

- 375×667
- 393×852
- 430×932

Required stress cases:

- 10-pour density
- maximum accessibility text size
- two-line CTA
- long Japanese helper copy
- safe-area bottom controls

Accessibility prototype checks:

- reading order
- accessible names
- state-announcement plan
- no per-second live announcements
- current step exposed outside visual rail
- color-independent state
- motion-independent state
- Reduce Motion equivalent meaning
- Increase Contrast and grayscale legibility

Static images cannot pass runtime accessibility checks.

### P2 — Interactive prototype/runtime

- duplicate primary tap
- Pause immediately before a cue
- Resume after a nominal timer boundary
- app switch
- screen lock
- reload
- process termination
- exact state/step recovery
- no background auto-completion

Invariant:

```text
elapsed time may change;
underlying state and step must not silently advance.
```

### P3 — Implemented PWA/device only

- Wake Lock release and reacquisition
- silent mode
- Bluetooth audio route
- background cue reliability
- notification permission denied
- installed PWA versus Safari mode
- low-power mode
- offline persistence
- service-worker update
- History/recovery integration

These remain `NOT_RUN` during visual refinement.

## Independent critic

Allowed per-track results:

- `ACCEPT`
- `PARTIALLY_ACCEPT`
- `HOLD_FOR_OWNER`
- `REJECT_WITH_REASON`

The critic must not produce a winner, ranking, hybrid, or cross-track component fusion.

## Final gate

Owner reviews the 18 frames, decision evidence, copy tests, accessibility evidence, ergonomics evidence, implementation complexity, and unresolved register.

Stop at:

```text
OWNER_GATE_FOR_CONCEPT_SELECTION
```

The complete plan package and Owner worksheet are stored in Google Drive under `03_DESIGN_REFERENCE/Gate1_Three_Track_Refinement`.

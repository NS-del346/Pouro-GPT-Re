# Implementation Plan

## Governing Rule

Repository inspection is the first implementation action. Historical branch/PR notes are not current truth until verified.

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

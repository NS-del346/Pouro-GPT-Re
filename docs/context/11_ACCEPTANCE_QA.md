# Acceptance and QA

## Evidence Rule

A check may be `PASS` only when evidence exists. Otherwise use `FAIL` or `NOT_RUN`.

## Required Commands

```text
npm run ci
npm run test:e2e
npm run test:e2e:offline
```

If a command does not exist or cannot be executed, record it as `NOT_RUN` with the reason. Do not substitute assumptions.

## Gate 5A Acceptance Baseline

The Gate 5A planning package Revision 2 is the canonical PR dependency and QA traceability source for implementation planning. It does not authorize implementation by itself.

P0 semantic checks:

- BREW Active has no actual-event completion control and does not claim actual pour sensing.
- BREW cue/notification state is derived from `APP_SCHEDULED` absolute Recipe Timeline semantics.
- LAB Active requires explicit user-confirmed start, pour completion, next-pour, drawdown, Skip, Undo, Correction, and Interruption semantics as assigned by PR-04B.
- PR-04A covers only the Draft PR #10 LAB transition-reducer foundation.
- PR-04B covers append-only LAB event log, event identity/provenance, Undo, Skip/deviation retention, Correction lineage, Interruption intervals, physical elapsed-time continuity, duplicate-event guards, and invalid ordering tests.
- PR-07 LAB Setup/Active Brew requires PR-04B and PR-05 completion.
- PR-08 LAB Evaluation/LAB LOG requires PR-04B, PR-05, and PR-07 completion.
- Beverage Mass and TDS are user-entered external measurements; Pourō does not sense them.
- Recipe Truth never changes as a side effect of Recipe Version, My Recipe, LAB evaluation, or implementation convenience.

Required completion-status coverage:

- `SCHEDULE_COMPLETE`
- `MANUAL_END_COMPLETE`
- `EARLY_END_SAVED`
- `USER_CONFIRMED_COMPLETE`
- `LAB_INCOMPLETE_SAVED`

## Owner-Approved Recovery Scope

OD-05 and OD-05-RECOVERY supersede any prior interpretation that incomplete-brew
reload, crash, process-termination restoration, or persistent auto-snapshot
recovery is required for release.

Validate the approved behavior instead:

- Pause resume returns to the same underlying state and step within the same live session.
- Same-process background return may preserve the in-memory session and recalculate elapsed fields from in-memory timestamps.
- Reload, crash, or browser/app process termination does not restore a partial incomplete brew.
- Incomplete brew is not saved to History.
- Incomplete brew is not silently completed.
- No recovery is Owner-approved product behavior, not an unimplemented release gap.
- Brew Again uses only stable completed History records.

Do not remove or weaken completed History, JSON export/import, or offline App Shell requirements.

## Required Viewports

- 375×667
- 393×852
- 430×932

For each viewport record:

- browser/mode
- screenshot evidence
- horizontal overflow
- CTA reachability
- four bottom tabs
- safe-area/home-indicator clearance
- text clipping
- 44×44 minimum interaction targets

## Core Flow

Verify:

`Home → Setup → Preview → Brew → Finish → Home Toast → History Detail`

Also verify:

- Brew Again restores saved snapshot
- JSON export/import validation
- offline launch and App Shell
- history is not silently regenerated from changed rules

## Active Brew Release Blockers

The following are blockers:

- BREW claims a scheduled cue is an actual pour-start, pour-complete, drawdown-complete, scale capture, or TDS sensing event
- LAB `POURING` changes to `WAITING` from time alone
- LAB `注ぎ終えた` is unavailable or ambiguous
- Pause is treated as Waiting
- Resume does not restore the same state
- LAB Drawdown is missing or automatically completes without the defined user confirmation
- elapsed and remaining information are misleading
- same-process background return creates negative time or duplicate transitions
- reload/crash/process termination restores an incomplete brew
- incomplete brew is written to History or silently completed
- non-pour steps display `0 g` or `null g`

## UI/UX Release Blockers

- notification/sound toggle clipped on the right
- bottom navigation conflicts with home indicator
- unreadably small type on physical device
- 5-pour recipe appears to have 3 pours without an explicit disclosure
- Setup directly edits temperature or grind contrary to policy
- Finish save does not return Home with Toast
- Toast cannot open the latest History Detail
- App Icon redesign restarted without owner instruction
- Brew Advice states causal diagnosis without research/data

## Accessibility

Verify or mark `NOT_RUN`:

- keyboard access where applicable
- semantic labels and focus order
- Dynamic Type/text enlargement
- VoiceOver
- Reduce Motion
- color-independent A/B/state communication
- sound-off and vibration-off usability

## Physical iPhone

Required before release candidate approval:

- Safari normal tab
- Add to Home Screen
- standalone launch
- offline launch
- VoiceOver
- Reduce Motion
- start sound, tick, step notification
- status bar and safe-area behavior
- Dynamic Island/notch clearance as applicable
- home indicator clearance
- enlarged text

Any unperformed item remains `NOT_RUN` and prevents a claim of complete physical-device QA.

## Governance Gate

Even with all tests passing:

- main merge requires owner approval
- public deploy requires owner approval
- Figma final re-LOCK requires owner approval
- protected repository modification is prohibited

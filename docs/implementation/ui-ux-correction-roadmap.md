# UI/UX Correction Roadmap

## Objective

Convert the canonical UI/UX correction into small, testable implementation slices while preserving Recipe Truth and data safety.

## Gate 5A PR Dependency Overlay

The work packages below are UI/UX grouping labels. Implementation PR order is governed by the Gate 5A Revision 2 roadmap:

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
PR-12 Mode navigation/The Instrument visual integration
PR-13 Integrated QA/Offline readiness
```

PR-04A is the existing Draft PR #10 re-scope to a LAB transition-reducer foundation only. PR-04B owns append-only event log, Undo, Skip, Correction, Interruption, event identity/provenance, and ordering guards. PR-07 and PR-08 must not proceed until PR-04B has landed or an equivalent Owner-approved LAB foundation exists.

## Work Packages

### WP-01 Motion Foundation

- semantic motion tokens
- Reduced Motion adapter
- press/selection/page/step/Toast primitives
- tests or Storybook/demo evidence

### WP-02 Iconoir Common Icons

- shared icon component
- canonical mappings
- 44×44 hit targets
- accessible icon-only controls

### WP-03 Home Redesign

- Home C hero + Home B alternate tiles
- core four methods
- CTA crossfade
- responsive layouts

### WP-04 Setup Source Alignment

- dose/ratio/roast
- recommendation-only temperature/grind
- canonical 4:6 terminology
- source/custom-generated disclosure

### WP-05 Preview Clarity

- neutral pre-start state
- complete pour count
- hidden-step disclosure
- preparation guidance

### WP-06 Active Brew State Model

- mode-specific state model: BREW `APP_SCHEDULED`, LAB `USER_CONFIRMED`
- PR #7 merged the BrewState/event vocabulary and authority invariant foundation only
- future BREW scheduled engine implementation in PR-03
- future LAB transition-reducer foundation in PR-04A
- future LAB event-engine completion in PR-04B
- future Active Brew UI implementation
- user-confirmed LAB pour completion
- Waiting/Pause separation
- Drawdown
- same-session Pause continuity
- same-process background continuity
- no incomplete brew persistence
- no reload/crash restoration
- no resumable session after reload
- completed History snapshots remain separate from incomplete-brew recovery
- event log foundation without claiming completed runtime behavior

This package is a release blocker and should not be reduced to visual polish.

### WP-07 Finish and History

- actual metadata inputs
- save to Home
- 3.2-second Toast
- latest History Detail navigation
- stable Brew Again snapshot

### WP-08 Tools and Settings

- grinder converter and references in Tools
- profile/preferences, sound, motion, theme, import/export in Settings
- fix notification-toggle clipping

### WP-09 App Icon

`DEFERRED`; no implementation.

### WP-10 Brew Advice

- research and provenance first
- observation/condition/experiment copy model
- placeholder only until data sufficiency is defined

### WP-11 Final QA

- CI/e2e/offline
- responsive screenshots
- accessibility
- physical iPhone/standalone/VoiceOver
- evidence matrix

## PR Strategy

Keep each PR close to one work package. Shared foundation PRs may precede screen PRs, but the Gate 5A dependency overlay is binding. Do not merge to main, deploy, mark Ready, modify PR #10, or start later PRs without owner approval.

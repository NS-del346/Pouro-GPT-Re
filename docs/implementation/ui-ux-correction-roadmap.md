# UI/UX Correction Roadmap

## Objective

Convert the canonical UI/UX correction into small, testable implementation slices while preserving Recipe Truth and data safety.

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

- explicit reducer/state machine
- user-confirmed pour completion
- Waiting/Pause separation
- Drawdown
- background/crash recovery
- event log and snapshots

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

Keep each PR close to one work package. Shared foundation PRs may precede screen PRs. Do not merge to main or deploy without owner approval.

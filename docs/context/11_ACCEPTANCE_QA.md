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

- `POURING` changes to `WAITING` from time alone
- `注ぎ終えた` is unavailable or ambiguous
- Pause is treated as Waiting
- Resume does not restore the same state
- Drawdown is missing or automatically completes without the defined user confirmation
- elapsed and remaining information are misleading
- background recovery loses state or creates negative time
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

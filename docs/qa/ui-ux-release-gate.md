# UI/UX Release Gate

## Result Vocabulary

- `PASS`: verified with evidence
- `FAIL`: requirement violated
- `NOT_RUN`: not executed or evidence unavailable

## Gate A — Authority

- Owner Decisions loaded
- Recipe Truth loaded
- protected repository unchanged
- R-13/R-14 policy preserved
- App Icon still deferred

## Gate B — Responsive

For 375×667, 393×852, 430×932:

- no horizontal overflow
- CTA reachable
- four tabs fit
- home indicator safe
- no clipped toggle/text
- 44×44 interaction targets

## Gate C — Core Flow

- Home selection motion
- Setup recommendation-only temperature/grind
- Preview full pour count
- Active Brew state transitions
- Finish save → Home → Toast
- Toast → latest History Detail

## Gate D — Active Brew

- no time-only Pouring completion
- user `注ぎ終えた`
- Waiting countdown
- Pause/Resume same state
- wait skip event logged
- independent Drawdown
- background/crash recovery
- planned vs actual preserved

## Gate E — Accessibility

- semantic names
- focus order
- keyboard where applicable
- text enlargement
- Reduce Motion
- VoiceOver
- color-independent state communication

## Gate F — Offline/Data

- App Shell offline
- local history stable
- snapshot restoration
- JSON schema validation
- import preview
- no silent destructive overwrite

## Gate G — Physical iPhone

- Safari
- standalone PWA
- offline launch
- status bar/safe area
- home indicator
- Dynamic Island/notch
- sound/tick/step notification
- VoiceOver
- Reduce Motion

Unrun physical-device items remain `NOT_RUN` and block a claim of complete release QA.

## Governance

Passing the technical gates does not authorize main merge, production deploy, or Figma re-LOCK.

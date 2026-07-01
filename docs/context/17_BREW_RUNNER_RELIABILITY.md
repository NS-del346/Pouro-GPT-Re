# Brew Runner Reliability

## Purpose

The Brew Runner is a stateful instrument, not an animation timeline. It must recover from pause, backgrounding, refresh/crash, and delayed user action without silently falsifying the brew record.

## Canonical States

```ts
type BrewState =
  | 'READY'
  | 'POURING'
  | 'WAITING'
  | 'READY_FOR_NEXT'
  | 'DRAWDOWN'
  | 'FINISH';
```

Pause is an overlay/control condition, not a replacement for the underlying BrewState.

## Transition Contract

```text
READY
→ user starts pour
POURING
→ user taps 注ぎ終えた
WAITING
→ countdown completes
READY_FOR_NEXT
→ user starts next pour
POURING
→ final pour completion / recipe rule
DRAWDOWN
→ user confirms completion
FINISH
```

Time alone must never move `POURING` to `WAITING`.

## Pause Contract

When paused, store:

- underlying state
- current step ID/index
- timer elapsed at pause
- wall-clock pause start
- accumulated paused duration

Resume returns to the same underlying state and updates timing without inventing progress.

## Timing Fields

```yaml
required:
  - timerElapsedSec
  - wallElapsedSec
  - pausedDurationSec
  - lastCheckpointAt
  - stateEnteredAt
```

- `timerElapsedSec`: brew-guidance time excluding paused duration.
- `wallElapsedSec`: real elapsed duration from start.
- `pausedDurationSec`: accumulated paused intervals.

Use wall-clock deltas for recovery; do not rely only on interval ticks.

## Background and Crash Recovery

Required behavior:

1. Auto-snapshot after every state transition and material manual override.
2. On resume/reload, validate snapshot schema and recipe snapshot.
3. Recalculate elapsed fields from stored timestamps.
4. Restore the exact saved recipe/step snapshot, not current mutable recipe rules.
5. Present a clear recovery choice when the prior session is incomplete.
6. Never silently mark a brew complete.

## Event Log

Each meaningful action creates an append-only event:

```ts
interface BrewEvent {
  id: string;
  at: string;
  type: string;
  stepId?: string;
  plannedValue?: unknown;
  actualValue?: unknown;
  note?: string;
}
```

Events include:

- brew started
- pour started
- pour completed by user
- wait skipped
- pause/resume
- step back/next
- manual override
- background recovery
- drawdown completed
- brew finished/abandoned

## Planned vs Actual

Store planned and actual values separately where known:

- water amount
- timing
- temperature
- grinder setting
- step completion

Do not overwrite planned values with actual values.

## Manual Override

Manual Override must:

- be explicit
- append an event
- preserve the original plan
- be recoverable from snapshot
- be visible in History Detail

## QA Invariants

- no negative remaining time
- no duplicate transition from repeated tap
- no interval drift dependency
- no auto-completion after background resume
- Pause resumes same state
- Drawdown remains user-confirmed
- non-pour steps do not show `0 g`/`null g`
- saved History restores the original generated steps

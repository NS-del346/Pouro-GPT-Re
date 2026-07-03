# Brew Runner Reliability

## Purpose

The Brew Runner is a stateful instrument, not an animation timeline. It must preserve same-live-session state, handle same-process background return without falsifying timing, and avoid silently falsifying or completing the brew record. OD-05-RECOVERY explicitly prohibits incomplete-brew restoration after reload, crash, or browser/app process termination.

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

Resume returns to the same underlying state and step in the same live session and updates timing without inventing progress. Pause state is not persisted as an incomplete-brew recovery contract across reload or crash.

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

Use wall-clock deltas for same-process elapsed recalculation; do not rely only on interval ticks.

## Live Session, Background, and Non-Recovery Contract

Required behavior:

1. Same live session Pause/Resume preserves the same underlying state and step.
2. Same-process background return may preserve the in-memory session.
3. Same-process background return may recalculate elapsed fields from in-memory timestamps.
4. Incomplete brew persistent auto-snapshots are prohibited.
5. Reload after an incomplete brew must not restore that incomplete brew.
6. Crash after an incomplete brew must not restore that incomplete brew.
7. Browser/app process termination must not restore that incomplete brew.
8. Do not present recovery choice UI for a prior incomplete session.
9. Do not save incomplete brew to History.
10. Do not silently mark an incomplete brew complete.

Completed History snapshots are a separate contract: a brew that has been explicitly completed and saved may preserve event and History data for History Detail, export/import, and Brew Again. Unfinished event logs are not restored after reload or crash.

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
- preserve same-live-session state without creating incomplete-brew recovery
- be visible in History Detail

## QA Invariants

- no negative remaining time
- no duplicate transition from repeated tap
- no interval drift dependency
- no auto-completion after same-process background return
- no incomplete-brew restoration after reload, crash, or process termination
- no incomplete-brew History record
- Pause resumes same state
- Drawdown remains user-confirmed
- non-pour steps do not show `0 g`/`null g`
- saved History restores the original generated steps

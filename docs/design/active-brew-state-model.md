# Active Brew State Model

## State Presentation

| State | Primary label | Main information | Central CTA |
|---|---|---|---|
| READY | `NEXT` | next pour amount/instruction | start next pour |
| POURING | `POUR` | `POUR TO`, cumulative target, current addition | `注ぎ終えた` |
| WAITING | `WAIT` | next-pour countdown and elapsed | `待機をスキップ` with confirmation |
| READY_FOR_NEXT | `NEXT` | next step ready | start next pour |
| DRAWDOWN | `DRAWDOWN` | wait until drawdown | `落ちきったら完了` |
| FINISH | `DONE` | completion summary | continue to Finish |

Pause overlays the current state and exposes `再開`; it does not replace it with Waiting.

## Timing Hierarchy

Primary:

```text
NEXT POUR
あと 00:26
```

Secondary:

```text
Elapsed 1:04
```

Never imply that an uncertain drawdown has a deterministic remaining time.

## Pour Display

```text
POUR TO
60 g

今回 +60 g
```

Non-pour steps must omit the water amount rather than show 0/null.

## Navigation and Recovery

- before meaningful progress, Back may return to Preview
- after progress, Back requires a confirmation dialog
- Pause continuity preserves the same underlying state and step within the same live session
- same-process background continuity may preserve the in-memory session and recalculate elapsed from in-memory timestamps
- reload/crash/process termination does not restore an incomplete brew
- incomplete brew does not create a History record
- completed History snapshots are separate from incomplete-brew recovery
- WAITING skip requires explicit confirmation and logs a skip event
- normal mode does not gain permanent manual next/back controls from the WAITING skip decision
- repeated taps must not create duplicate transitions

## Accessibility

- state label is text, not color only
- central CTA has explicit accessible name
- live-region updates must avoid excessive announcements
- focus moves predictably after state transition
- Reduce Motion keeps state changes understandable

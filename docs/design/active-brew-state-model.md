# Active Brew State Model

## State Presentation

| State | Primary label | Main information | Central CTA |
|---|---|---|---|
| READY | `NEXT` | next pour amount/instruction | start next pour |
| POURING | `POUR` | `POUR TO`, cumulative target, current addition | `注ぎ終えた` |
| WAITING | `WAIT` | next-pour countdown and elapsed | `待機をスキップ` |
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
- background recovery restores exact state/snapshot
- repeated taps must not create duplicate transitions

## Accessibility

- state label is text, not color only
- central CTA has explicit accessible name
- live-region updates must avoid excessive announcements
- focus moves predictably after state transition
- Reduce Motion keeps state changes understandable

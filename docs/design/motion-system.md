# Motion System

## Principle

Motion communicates state and tactility without demanding attention. Amber acts as a restrained progress signal, not a glow effect.

## Baseline Values

| Interaction | Duration | Behavior |
|---|---:|---|
| Press | 100 ms | scale to 0.98, immediate release |
| Selection | 240 ms | border/background transition, expansion, icon scale, description fade |
| CTA content change | 180 ms | text and arrow crossfade |
| Page transition | 280 ms | opacity + 12 px vertical movement |
| Step transition | 320 ms | opacity 0→1, 18–28 px vertical movement |
| Toast enter | 260 ms | bottom translate + fade |
| Toast visible | 3200 ms | stable |
| Toast exit | 180 ms | fade + slight translate |

## Active Brew

- `POURING`: stable progress response; no automatic state morph at scheduled time.
- `WAITING`: subtle breathing rhythm, not a spinner that implies uncertainty.
- `READY_FOR_NEXT`: concise readiness cue.
- `DRAWDOWN`: quiet continuous state, no false countdown.
- `FINISH`: short amber expansion, then settle.

## Reduced Motion

- remove scale and large translation
- use opacity and instantaneous state text changes
- preserve timing information and focus movement
- never make essential state understanding depend on animation

## Prohibited

- strong bounce
- flashy spring
- excessive glow
- game-like particle effects
- long blocking transitions
- animation that suggests time precision the app cannot guarantee

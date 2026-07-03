# PR-C Brew State/Event Contract Report

## Scope

PR-C adds only the minimal Brew state/event vocabulary foundation:

- exact canonical `BrewState` values;
- internal `BrewEventType` vocabulary;
- minimum `BrewEvent` interface;
- authority invariant tests.

This PR does not add a reducer, transition table, timer, countdown engine, Pause engine, background/reload recovery, snapshot schema, persistence, History, React hooks/components, Active Brew UI, WAITING skip behavior, step back/next behavior, post-adjustment transitions, Recipe Truth data, dependencies, PWA, service worker, deploy, or release behavior.

## Canonical References

- `docs/context/02_OWNER_DECISIONS.md`
- `docs/context/13_IMPLEMENTATION_PLAN.md`
- `docs/context/17_BREW_RUNNER_RELIABILITY.md`
- `docs/context/18_UI_UX_CORRECTION_DIRECTIVE.md`
- `docs/design/active-brew-state-model.md`
- `docs/implementation/ui-ux-correction-roadmap.md`
- `POURO_GPT_RE_PR_C_AUTHORITY_PREFLIGHT_HG001_20260703.zip`
- `07_PR_C_IMPLEMENTATION_PROMPT_HG031A.md`

## BrewState Values

```yaml
- READY
- POURING
- WAITING
- READY_FOR_NEXT
- DRAWDOWN
- FINISH
```

Pause is not a `BrewState`.

## BrewEventType Values

```yaml
- BREW_STARTED
- POUR_STARTED
- POUR_COMPLETED_BY_USER
- WAIT_COUNTDOWN_COMPLETED
- WAIT_SKIPPED
- PAUSED
- RESUMED
- STEP_BACK
- STEP_NEXT
- MANUAL_OVERRIDE_APPLIED
- BACKGROUND_RECOVERED
- DRAWDOWN_COMPLETED_BY_USER
- BREW_FINISHED
- BREW_ABANDONED
```

These event names are internal technical vocabulary names derived from canonical event meanings. They are not UI copy and are not a stable persisted/exported schema contract.

Vocabulary presence does not authorize unresolved UI availability or state transitions.

## Preserved Open Owner Decisions

- `WAIT_SKIPPED` does not authorize WAITING skip UI or transition behavior.
- `STEP_BACK` and `STEP_NEXT` do not authorize navigation rules.
- `BREW_ABANDONED` does not settle save, History, partial record, or resume behavior.
- Between-pour DRAWDOWN destinations remain unresolved.
- First-pour event emission ordering remains unresolved.
- Stable persisted event schema names/version remain unresolved.

## Validation Status

Validation results are recorded in the final Codex report for this PR run.

Physical iPhone, VoiceOver, Dynamic Type, Reduced Motion, and subjective UI acceptance are `NOT_RUN` because PR-C has no UI surface and those checks require human/device evidence.

// These are internal event vocabulary names derived from canonical event meanings.
// Vocabulary presence does not authorize unresolved UI availability or state transitions.
// These names are not yet a stable persisted/exported schema contract.
export const BREW_EVENT_TYPES = [
  'BREW_STARTED',
  'POUR_STARTED',
  'POUR_COMPLETED_BY_USER',
  'WAIT_COUNTDOWN_COMPLETED',
  'WAIT_SKIPPED',
  'PAUSED',
  'RESUMED',
  'STEP_BACK',
  'STEP_NEXT',
  'MANUAL_OVERRIDE_APPLIED',
  'BACKGROUND_RECOVERED',
  'DRAWDOWN_COMPLETED_BY_USER',
  'BREW_FINISHED',
  'BREW_ABANDONED',
] as const;

export type BrewEventType = (typeof BREW_EVENT_TYPES)[number];

export interface BrewEvent {
  id: string;
  at: string;
  type: BrewEventType;
  stepId?: string;
  plannedValue?: unknown;
  actualValue?: unknown;
  note?: string;
}

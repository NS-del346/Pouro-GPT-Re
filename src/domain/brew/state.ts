export const BREW_STATES = [
  'READY',
  'POURING',
  'WAITING',
  'READY_FOR_NEXT',
  'DRAWDOWN',
  'FINISH',
] as const;

export type BrewState = (typeof BREW_STATES)[number];

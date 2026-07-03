import { describe, expect, expectTypeOf, it } from 'vitest';

import { BREW_STATES } from './state';

const EXPECTED_BREW_STATES = [
  'READY',
  'POURING',
  'WAITING',
  'READY_FOR_NEXT',
  'DRAWDOWN',
  'FINISH',
] as const;

describe('BREW_STATES', () => {
  it('contains exactly the canonical six BrewState values in order', () => {
    expect(BREW_STATES).toEqual(EXPECTED_BREW_STATES);
  });

  it('keeps Pause out of BrewState', () => {
    expect(BREW_STATES).not.toContain('PAUSED');
    expect(BREW_STATES).not.toContain('PAUSE');
    expect(BREW_STATES).not.toContain('STOPPED');
  });

  it('does not define unauthorized alias states', () => {
    for (const unauthorizedState of ['IDLE', 'BREWING', 'RESTING', 'COMPLETE', 'DONE']) {
      expect(BREW_STATES).not.toContain(unauthorizedState);
    }
  });

  it('contains unique values', () => {
    expect(new Set(BREW_STATES).size).toBe(BREW_STATES.length);
  });

  it('preserves the readonly tuple type intent', () => {
    expectTypeOf(BREW_STATES).toEqualTypeOf<typeof EXPECTED_BREW_STATES>();
  });
});

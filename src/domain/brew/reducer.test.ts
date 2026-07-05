import { describe, expect, it } from 'vitest';

import { reduceBrewTransition } from './reducer';
import type { BrewReducerResult, BrewTransitionAction } from './reducer';
import type { BrewState } from './state';

const ALL_ACTIONS = [
  { type: 'START_BREW' },
  { type: 'COMPLETE_POUR', isFinalPour: false },
  { type: 'COMPLETE_POUR', isFinalPour: true },
  { type: 'WAIT_COMPLETED' },
  { type: 'SKIP_WAIT', confirmed: false },
  { type: 'SKIP_WAIT', confirmed: true },
  { type: 'START_NEXT_POUR' },
  { type: 'COMPLETE_DRAWDOWN' },
  { type: 'TIME_ELAPSED' },
] as const satisfies readonly BrewTransitionAction[];

function expectAccepted(result: BrewReducerResult, state: BrewState): void {
  expect(result).toEqual({
    ok: true,
    state,
  });
}

function expectRejected(
  result: BrewReducerResult,
  state: BrewState,
  reason: BrewReducerResult extends infer Result
    ? Result extends { ok: false; reason: infer Reason }
      ? Reason
      : never
    : never,
): void {
  expect(result).toEqual({
    ok: false,
    state,
    reason,
  });
}

describe('reduceBrewTransition', () => {
  it.each([
    ['READY', { type: 'START_BREW' }, 'POURING'],
    ['POURING', { type: 'COMPLETE_POUR', isFinalPour: false }, 'WAITING'],
    ['POURING', { type: 'COMPLETE_POUR', isFinalPour: true }, 'DRAWDOWN'],
    ['WAITING', { type: 'WAIT_COMPLETED' }, 'READY_FOR_NEXT'],
    ['WAITING', { type: 'SKIP_WAIT', confirmed: true }, 'READY_FOR_NEXT'],
    ['READY_FOR_NEXT', { type: 'START_NEXT_POUR' }, 'POURING'],
    ['DRAWDOWN', { type: 'COMPLETE_DRAWDOWN' }, 'FINISH'],
  ] as const satisfies readonly (readonly [BrewState, BrewTransitionAction, BrewState])[])(
    'accepts %s + %o -> %s',
    (state, action, nextState) => {
      expectAccepted(reduceBrewTransition(state, action), nextState);
    },
  );

  it('rejects unconfirmed WAITING skip and leaves state unchanged', () => {
    expectRejected(
      reduceBrewTransition('WAITING', { type: 'SKIP_WAIT', confirmed: false }),
      'WAITING',
      'CONFIRMATION_REQUIRED',
    );
  });

  it.each(['POURING', 'DRAWDOWN'] as const)(
    'rejects %s + TIME_ELAPSED and leaves state unchanged',
    (state) => {
      expectRejected(
        reduceBrewTransition(state, { type: 'TIME_ELAPSED' }),
        state,
        'TIME_ONLY_TRANSITION_PROHIBITED',
      );
    },
  );

  it('rejects invalid state and action pairs without changing state', () => {
    expectRejected(
      reduceBrewTransition('READY', { type: 'COMPLETE_POUR', isFinalPour: false }),
      'READY',
      'INVALID_STATE_ACTION_PAIR',
    );
  });

  it('does not progress state after repeated invalid actions', () => {
    const action = { type: 'COMPLETE_POUR', isFinalPour: false } as const;
    const firstResult = reduceBrewTransition('READY', action);
    const secondResult = reduceBrewTransition(firstResult.state, action);

    expectRejected(firstResult, 'READY', 'INVALID_STATE_ACTION_PAIR');
    expectRejected(secondResult, 'READY', 'INVALID_STATE_ACTION_PAIR');
  });

  it.each(ALL_ACTIONS)('keeps FINISH terminal for action %o', (action) => {
    const result = reduceBrewTransition('FINISH', action);

    expect(result.ok).toBe(false);
    expect(result.state).toBe('FINISH');
  });

  it('only allows COMPLETE_DRAWDOWN from DRAWDOWN to reach FINISH', () => {
    for (const action of ALL_ACTIONS) {
      const result = reduceBrewTransition('DRAWDOWN', action);

      if (action.type === 'COMPLETE_DRAWDOWN') {
        expectAccepted(result, 'FINISH');
      } else {
        expect(result.state).toBe('DRAWDOWN');
      }
    }
  });

  it('does not mutate the input action object', () => {
    const action = Object.freeze({
      type: 'COMPLETE_POUR',
      isFinalPour: false,
    } as const satisfies BrewTransitionAction);

    reduceBrewTransition('POURING', action);

    expect(action).toEqual({
      type: 'COMPLETE_POUR',
      isFinalPour: false,
    });
  });

  it('does not expose persistence, timestamp, ID, History, recovery, or event-log fields', () => {
    const acceptedResult = reduceBrewTransition('READY', { type: 'START_BREW' });
    const rejectedResult = reduceBrewTransition('POURING', { type: 'TIME_ELAPSED' });

    expect(Object.keys(acceptedResult).sort()).toEqual(['ok', 'state']);
    expect(Object.keys(rejectedResult).sort()).toEqual(['ok', 'reason', 'state']);

    for (const result of [acceptedResult, rejectedResult]) {
      expect(result).not.toHaveProperty('id');
      expect(result).not.toHaveProperty('at');
      expect(result).not.toHaveProperty('history');
      expect(result).not.toHaveProperty('recovery');
      expect(result).not.toHaveProperty('events');
      expect(result).not.toHaveProperty('eventLog');
      expect(result).not.toHaveProperty('timestamp');
    }
  });
});

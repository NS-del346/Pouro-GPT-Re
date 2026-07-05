import type { BrewState } from './state';

export type BrewTransitionAction =
  | {
      type: 'START_BREW';
    }
  | {
      type: 'COMPLETE_POUR';
      isFinalPour: boolean;
    }
  | {
      type: 'WAIT_COMPLETED';
    }
  | {
      type: 'SKIP_WAIT';
      confirmed: boolean;
    }
  | {
      type: 'START_NEXT_POUR';
    }
  | {
      type: 'COMPLETE_DRAWDOWN';
    }
  | {
      type: 'TIME_ELAPSED';
    };

export type BrewTransitionRejectionReason =
  'INVALID_STATE_ACTION_PAIR' | 'CONFIRMATION_REQUIRED' | 'TIME_ONLY_TRANSITION_PROHIBITED';

export type BrewReducerResult =
  | {
      ok: true;
      state: BrewState;
    }
  | {
      ok: false;
      state: BrewState;
      reason: BrewTransitionRejectionReason;
    };

function accepted(state: BrewState): BrewReducerResult {
  return {
    ok: true,
    state,
  };
}

function rejected(state: BrewState, reason: BrewTransitionRejectionReason): BrewReducerResult {
  return {
    ok: false,
    state,
    reason,
  };
}

function rejectInvalidPair(state: BrewState): BrewReducerResult {
  return rejected(state, 'INVALID_STATE_ACTION_PAIR');
}

export function reduceBrewTransition(
  state: BrewState,
  action: BrewTransitionAction,
): BrewReducerResult {
  if (action.type === 'TIME_ELAPSED') {
    return rejected(state, 'TIME_ONLY_TRANSITION_PROHIBITED');
  }

  if (state === 'FINISH') {
    return rejectInvalidPair(state);
  }

  switch (action.type) {
    case 'START_BREW':
      return state === 'READY' ? accepted('POURING') : rejectInvalidPair(state);

    case 'COMPLETE_POUR':
      if (state !== 'POURING') {
        return rejectInvalidPair(state);
      }

      return accepted(action.isFinalPour ? 'DRAWDOWN' : 'WAITING');

    case 'WAIT_COMPLETED':
      return state === 'WAITING' ? accepted('READY_FOR_NEXT') : rejectInvalidPair(state);

    case 'SKIP_WAIT':
      if (state !== 'WAITING') {
        return rejectInvalidPair(state);
      }

      return action.confirmed
        ? accepted('READY_FOR_NEXT')
        : rejected(state, 'CONFIRMATION_REQUIRED');

    case 'START_NEXT_POUR':
      return state === 'READY_FOR_NEXT' ? accepted('POURING') : rejectInvalidPair(state);

    case 'COMPLETE_DRAWDOWN':
      return state === 'DRAWDOWN' ? accepted('FINISH') : rejectInvalidPair(state);

    default: {
      const exhaustiveAction: never = action;
      return exhaustiveAction;
    }
  }
}

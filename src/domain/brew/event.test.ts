/// <reference types="node" />

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { BREW_EVENT_TYPES } from './event';
import type { BrewEvent } from './event';
import { BREW_STATES } from './state';

const BREW_SOURCE_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const BREW_PRODUCTION_FILES = ['state.ts', 'event.ts'] as const;

const EXPECTED_BREW_EVENT_TYPES = [
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

function readBrewProductionSource(): string {
  return BREW_PRODUCTION_FILES.map((fileName) =>
    readFileSync(join(BREW_SOURCE_DIRECTORY, fileName), 'utf8'),
  ).join('\n');
}

describe('BREW_EVENT_TYPES', () => {
  it('contains exactly the internal BrewEventType vocabulary in order', () => {
    expect(BREW_EVENT_TYPES).toEqual(EXPECTED_BREW_EVENT_TYPES);
  });

  it('contains unique values', () => {
    expect(new Set(BREW_EVENT_TYPES).size).toBe(BREW_EVENT_TYPES.length);
  });

  it('uses explicit user-completion names for pour and drawdown completion', () => {
    expect(BREW_EVENT_TYPES).toContain('POUR_COMPLETED_BY_USER');
    expect(BREW_EVENT_TYPES).toContain('DRAWDOWN_COMPLETED_BY_USER');
  });

  it('does not define time-only or silent auto-completion event names', () => {
    for (const prohibitedEventName of [
      'POUR_COMPLETED_BY_TIME',
      'POUR_AUTO_COMPLETED',
      'DRAWDOWN_AUTO_COMPLETED',
      'BREW_SILENTLY_FINISHED',
      'PAUSED_STATE_ENTERED',
    ]) {
      expect(BREW_EVENT_TYPES).not.toContain(prohibitedEventName);
    }
  });

  it('keeps PAUSED and RESUMED as events only, not states', () => {
    expect(BREW_EVENT_TYPES).toContain('PAUSED');
    expect(BREW_EVENT_TYPES).toContain('RESUMED');
    expect(BREW_STATES).not.toContain('PAUSED');
    expect(BREW_STATES).not.toContain('RESUMED');
  });

  it('keeps plannedValue and actualValue as separate BrewEvent fields', () => {
    const event = {
      id: 'event-1',
      at: '2026-07-03T00:00:00.000Z',
      type: 'MANUAL_OVERRIDE_APPLIED',
      plannedValue: { grams: 60 },
      actualValue: { grams: 58.5 },
    } satisfies BrewEvent;

    expect(event.plannedValue).toEqual({ grams: 60 });
    expect(event.actualValue).toEqual({ grams: 58.5 });
    expect(event.plannedValue).not.toBe(event.actualValue);
  });

  it('allows stepId to be omitted or provided without adding required fields', () => {
    const eventWithoutStep = {
      id: 'event-2',
      at: '2026-07-03T00:00:00.000Z',
      type: 'BREW_STARTED',
    } satisfies BrewEvent;

    const eventWithStep = {
      id: 'event-3',
      at: '2026-07-03T00:00:10.000Z',
      type: 'POUR_STARTED',
      stepId: 'step-1',
    } satisfies BrewEvent;

    expect(eventWithoutStep).not.toHaveProperty('stepId');
    expect(eventWithStep.stepId).toBe('step-1');
  });

  it('keeps WAIT_SKIPPED, STEP_BACK, and STEP_NEXT vocabulary-only with no behavior exports', () => {
    expect(BREW_EVENT_TYPES).toEqual(
      expect.arrayContaining(['WAIT_SKIPPED', 'STEP_BACK', 'STEP_NEXT']),
    );

    const source = readBrewProductionSource();

    expect(source).not.toMatch(/\bexport\s+function\b/);
    expect(source).not.toMatch(/\bexport\s+class\b/);
    expect(source).not.toMatch(/\bexport\s+const\s+\w*(?:Reducer|Transition|Timer|Countdown)\w*\b/);
  });

  it('does not introduce React, storage, timer, reducer, or recipe-truth implementation hooks', () => {
    const source = readBrewProductionSource();

    expect(source).not.toMatch(/\bfrom\s+['"]react['"]/);
    expect(source).not.toMatch(/\b(?:localStorage|indexedDB|IndexedDB)\b/);
    expect(source).not.toMatch(/\b(?:setTimeout|setInterval|clearTimeout|clearInterval)\b/);
    expect(source).not.toMatch(/\b(?:reducer|transitionTable|stateMachine|applyEvent)\b/i);
    expect(source).not.toMatch(/\bRecipeTruth\b|\brecipe truth\b/i);
  });
});

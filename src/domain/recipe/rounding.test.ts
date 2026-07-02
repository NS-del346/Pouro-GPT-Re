import { describe, expect, it } from 'vitest';

import { round0_1g } from './rounding';

describe('round0_1g', () => {
  it('rounds non-negative finite gram values to the 0.1g grid', () => {
    expect(round0_1g(0)).toBe(0);
    expect(round0_1g(1.04)).toBe(1);
    expect(round0_1g(1.05)).toBe(1.1);
    expect(round0_1g(249.55)).toBe(249.6);
    expect(round0_1g(0.1 + 0.2)).toBe(0.3);
  });

  it('returns values on the 0.1g grid', () => {
    const examples = [0, 0.01, 1.04, 1.05, 12.34, 249.55, 0.1 + 0.2];

    for (const grams of examples) {
      const rounded = round0_1g(grams);
      const tenths = rounded * 10;

      expect(Math.abs(tenths - Math.round(tenths))).toBeLessThan(1e-10);
    }
  });

  it('rejects non-finite inputs with TypeError', () => {
    expect(() => round0_1g(Number.NaN)).toThrow(TypeError);
    expect(() => round0_1g(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    expect(() => round0_1g(Number.NEGATIVE_INFINITY)).toThrow(TypeError);
  });

  it('rejects negative inputs with RangeError', () => {
    expect(() => round0_1g(-0.1)).toThrow(RangeError);
  });

  it('does not return negative zero', () => {
    expect(Object.is(round0_1g(0), -0)).toBe(false);
    expect(Object.is(round0_1g(-0), -0)).toBe(false);
  });
});

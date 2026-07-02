export function round0_1g(grams: number): number {
  if (!Number.isFinite(grams)) {
    throw new TypeError('round0_1g requires a finite number of grams.');
  }

  if (grams < 0) {
    throw new RangeError('round0_1g does not accept negative gram values.');
  }

  const tenths = Math.floor(grams * 10 + 0.5 + Number.EPSILON);
  const rounded = tenths / 10;

  return Object.is(rounded, -0) ? 0 : rounded;
}

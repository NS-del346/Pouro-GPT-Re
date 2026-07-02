export const MAX_SAFE_GRAMS_FOR_TENTHS = Number.MAX_SAFE_INTEGER / 10;

export function round0_1g(grams: number): number {
  if (!Number.isFinite(grams)) {
    throw new TypeError('round0_1g requires a finite number of grams.');
  }

  if (grams < 0) {
    throw new RangeError('round0_1g does not accept negative gram values.');
  }

  if (grams > MAX_SAFE_GRAMS_FOR_TENTHS) {
    throw new RangeError('round0_1g cannot safely round this value to integer tenths.');
  }

  const scaledTenths = grams * 10;

  if (!Number.isFinite(scaledTenths)) {
    throw new RangeError('round0_1g cannot safely scale this value to integer tenths.');
  }

  const tenths = Math.floor(scaledTenths + 0.5 + Number.EPSILON);

  if (!Number.isSafeInteger(tenths)) {
    throw new RangeError('round0_1g cannot safely round this value to integer tenths.');
  }

  const rounded = tenths / 10;

  return Object.is(rounded, -0) ? 0 : rounded;
}

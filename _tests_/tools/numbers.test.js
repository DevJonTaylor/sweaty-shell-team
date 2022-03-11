/* eslint-disable no-undef */
const { randomNumber } = require('../../lib/tools/numbers');

describe('Library > Tools > Numbers', () => {
  test('randomNumber function', () => {
    const min = 0;
    const max = 1000;
    expect(randomNumber(min, max)).toBeGreaterThanOrEqual(min);
    expect(randomNumber(min, max)).toBeLessThanOrEqual(max);
  });
});
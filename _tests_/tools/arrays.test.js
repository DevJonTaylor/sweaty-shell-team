/* eslint-disable no-undef */
const { randomNode } = require('../../lib/tools/arrays');

const testArray = [1,2,3,4,5,6,7,8,9];

describe('Library > Tools > Arrays', () => {
  test('randomNode function', () => {
    const node = randomNode(testArray);

    expect(node).toBe(testArray.find(val => val === node));
  });
});

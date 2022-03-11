/* eslint-disable no-undef */
const Input = require('../../src/Questions/Input');

describe('Input Class', () => {
  const input = new Input('Testing This');
  test('Instantiate', () => {
    expect(input._type).toBe('input');
  });
});
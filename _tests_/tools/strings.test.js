/* eslint-disable no-undef */
const { camelCase, capitalize } = require('../../lib/tools/strings');

describe('Library > Tools > Strings', () => {
  test('camelCase function', () => {
    expect(camelCase('camel case spelling is awesome')).toBe('camelCaseSpellingIsAwesome');
  });

  test('capitalize function', () => {
    expect(capitalize('i want this capitalized!')).toBe('I want this capitalized!');
  });
});
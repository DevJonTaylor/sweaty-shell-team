/* eslint-disable no-undef */
const { camelCase, capitalize, isEmpty } = require('../../lib/tools/strings');

describe('Library > Tools > Strings', () => {
  test('camelCase function', () => {
    expect(camelCase('camel case spelling is awesome')).toBe('camelCaseSpellingIsAwesome');
  });

  test('capitalize function', () => {
    expect(capitalize('i want this capitalized!')).toBe('I want this capitalized!');
  });

  test('isEmpty function', () => {
    expect(isEmpty()).toBeNull();
    expect(isEmpty('')).toBe(true);
    expect(JSON.stringify(isEmpty('', 'I am not', '', 'Empty')))
      .toBe(JSON.stringify([true, false, true, false]));
  });
});
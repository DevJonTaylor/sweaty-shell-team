/* eslint-disable no-undef */
const { isUndefined, isString, isFunction } = require('../../lib/tools/typeChecks');
const toBeUndefined = undefined;
const toBeString = 'asd';
const toBeNumber = 123;
const toBeNull = null;
const toBeFunction = () => {};

describe('Library > Tools > typeChecks', () => {

  test('isUndefined function', () => {
    const stringifyArrayIsUndefined = JSON.stringify(isUndefined(toBeUndefined, toBeString, toBeNumber, toBeNull));
    expect(isUndefined()).toBeFalsy();
    expect(isUndefined(toBeUndefined)).toBeTruthy();
    expect(stringifyArrayIsUndefined).toBe(JSON.stringify([true, false, false, false]));
  });

  test('isString function', () => {
    const stringifyArrayIsString = JSON.stringify(isString(toBeString, toBeNumber, toBeFunction, toBeString));
    expect(isString()).toBeFalsy();
    expect(isString(toBeString)).toBeTruthy();
    expect(stringifyArrayIsString).toBe(JSON.stringify([true, false, false, true]));
  });

  test('isFunction function', () => {
    const stringifyArrayIsFunction = JSON.stringify(isFunction(toBeFunction, toBeNull, toBeFunction));
    expect(isFunction()).toBeFalsy();
    expect(isFunction(toBeFunction));
    expect(stringifyArrayIsFunction).toBe(JSON.stringify([true, false, true]));
  });
});
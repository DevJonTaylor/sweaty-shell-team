/* eslint-disable no-undef */
const Choice = require('../../src/Questions/Choice');

describe('Choice Class', () => {
  const choice = new Choice('I am a choice');
  test('Instantiate', () => {
    expect(choice._name).toBe('I am a choice');
  });

  test('name method', () => {
    expect(choice.name('hello dude').name()).toBe('hello dude');
  });

  test('value method', () => {
    expect(choice.value('hello dude').value()).toBe('helloDude');
  });

  test('key method', () => {
    expect(choice.key('12312').key()).toBe('12312');
  });

  test('getter checked & isChecked', () => {
    expect(choice.checked.isChecked).toBe(true);
    expect(choice.checked.isChecked).toBe(false);
  });

  test('getter disabled & isDisabled', () => {
    expect(choice.disabled.isDisabled).toBe(true);
    expect(choice.disabled.isDisabled).toBe(false);
  });

  test('getter toObject', () => {
    const objToBe = {
      name: 'I am a choice',
      value: 'iAmAChoice',
      checked: true,
      disabled: true,
      key: '123'
    };
    const c2 = new Choice('I am a choice');
    c2.key('123').checked.disabled;
    expect(JSON.stringify(c2.toObject)).toBe(JSON.stringify(objToBe));
  });
});
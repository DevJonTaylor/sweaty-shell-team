/* eslint-disable no-undef */
const Question = require('../../src/Questions/Question');

describe('Question Class', () => {
  const question = new Question('Testing This');

  test('Instantiate', () => {
    expect(question._name).toBe('testingThis');
    expect(question._originalName).toBe('Testing This');
  });

  test('message method', () => {
    expect(question.message('Hello there!').message())
      .toBe('Hello there!');
  });

  test('default method', () => {
    expect(question.default('Hiya').default()).toBe('Hiya');
  });

  test('validate method', () => {
    expect(question.validate(text => text !== '').validate()('')).toBe(false);
  });

  test('getter validateEmpty', () => {
    expect(question.validateEmpty.validate()('')).toBe('Testing This cannot be empty.');
  });

  test('getter isDefault', () => {
    expect(question.default('true').isDefault).toBeTruthy();
    expect(question.default('').isDefault).toBeFalsy();
  });

  test('getter isValidate', () => {
    expect(question.validate('').isValidate).toBeFalsy();
    expect(question.validateEmpty.isValidate).toBeTruthy();
  });

  test('getter toObject', () => {
    const obj = {
      type: 'input',
      name: 'testingThis',
      message: 'I am testing this.'
    };
    question._type = 'input';
    expect(JSON.stringify(question.message('I am testing this.')
      .validate('')
      .default('')
      .toObject)).toBe(JSON.stringify(obj));
  });
});
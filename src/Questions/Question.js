const { camelCase } = require('../../lib/tools/strings');
const { isUndefined } = require('../../lib/tools/typeChecks');

/**
 * @typedef {Question | List | Input | Choice} QuestionTypes
 * @typedef {string | function(value: string): boolean|string} ValidateType
 */

/**
 * @property {string} _originalName
 * @property {string} _type
 * @property {string} _name
 * @property {string} _message
 * @property {string} _default
 * @property {ValidateType} _validate
 */
class Question {
  _originalName = '';
  _type = '';
  _name = '';
  _message = '';
  _default = '';
  _validate = '';

  /**
   * @param {string} name
   */
  constructor(name) {
    if(!name) throw new Error('You must provide a name for the question.');

    this._name = camelCase(name);
    this._originalName = name;
  }

  /**
   * This is in nearly every question. It represents what to ask the user.
   * If a parameter is not provided it will return the current message value.
   * If a parameter is provided it will return this for chaining.
   * @param {string} [message]
   * @return {(QuestionTypes | string)}
   */
  message(message) {
    if(isUndefined(message)) return this._message;
    this._message = message;

    return this;
  }

  /**
   * This is an option in most Questions.
   * It provides a value when the user does not provide one.
   * If a parameter is not provided it will return the current value of default.
   * If a value is provided it will return this for chaining.
   * @param {string} [_default]
   * @returns {(string | QuestionTypes)}
   */
  default(_default) {
    if(isUndefined(_default)) return this._default;
    this._default = _default;

    return this;
  }

  /**
   * Allows you to check what the user provided and explain that is a valid answer or not.
   * If no parameter is provided then the current value is returned.
   * If an empty string is provided it will override what is currently there with that.
   * Empty strings are basically like removing validate from the question.
   * Functions as a parameter accept a string.
   *    If they return false it will simply just tell the user nothing but not proceed.
   *    If they return true it will pass them.
   *    If they return a string it will provide that message as an error message allowing to try again.
   * @param {ValidateType} [validate]
   * @return {(ValidateType | QuestionTypes)}
   */
  validate(validate) {
    if(isUndefined(validate)) return this._validate;
    if(typeof(validate) !== 'function') {
      if(validate !== '') throw new Error(`Validate takes a function, received ${typeof(validate)}`);
    }

    this._validate = validate;

    return this;
  }

  /**
   * Setups an empty response check in the validation section.
   * @returns {QuestionTypes}
   */
  get validateEmpty() {
    const name = this._originalName;
    return this.validate(text => text !== '' ? true : `${name} cannot be empty.`);
  }

  /**
   * Checks if default is empty or not.
   * @returns {boolean}
   */
  get isDefault() {
    return this._default !== '';
  }

  /**
   * Checks if validate is empty or not.
   * @returns {boolean}
   */
  get isValidate() {
    return this._validate !== '';
  }

  /**
   * returns an object literal to be provided to Inquirer.
   * @returns {{
   *    name: string,
   *    type: string,
   *    message: string,
   *    default?: string,
   *    validate?: ValidateType
   * }}
   */
  get toObject() {
    const returnMe = {
      type: this._type,
      name: this._name,
      message: this._message
    };

    if(this.isDefault) returnMe.default = this._default;
    if(this.isValidate) returnMe.validate = this._validate;

    return returnMe;
  }
}

module.exports = Question;
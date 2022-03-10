const { camelCase } = require('../../lib/tools/strings');
const { isUndefined } = require('../../lib/tools/typeChecks');

/**
 * @property {string} _originalName
 * @property {string} _type
 * @property {string} _name
 * @property {string} _message
 * @property {string} _default
 * @property {string|((value: string) => boolean)} _validate
 */
class Question {
  _originalName = '';
  _type = '';
  _name = '';
  _message = '';
  _default = '';
  _validate = '';

  constructor(name) {
    if(!name) throw new Error('You must provide a name for the question.');

    this._name = camelCase(name);
    this._originalName = name;
  }

  /**
   * This is in nearly every question and represents what to ask the user.
   * @param message {undefined | string}
   * @type {((message: undefined) => string) & ((message: string) => Question)}
   * @return {Question | string}
   */
  message(message = undefined) {
    if(isUndefined(message)) return this._message;
    this._message = message;

    return this;
  }

  /**
   * This is an option in most Questions.  It provides a value when the user does not provide one.
   * @param _default {undefined | string}
   * @type {((message: undefined) => string) & ((message: string) => Question)}
   * @returns {string | Question}
   */
  default(_default = undefined) {
    if(isUndefined(_default)) return this._default;
    this._default = _default;

    return this;
  }

  /**
   * Allows you to check what the user provided and explain that is a valid answer or not.
   * @param {undefined|string|function(string): boolean|string} validate
   * @type {function(validate: undefined): function(value: string): boolean|string | function(validate: function(string): boolean): Question}
   * @return {Question|string|function(value: string): (boolean|string)}
   */
  validate(validate = undefined) {
    if(isUndefined(validate)) return this._validate;
    if(typeof(validate) !== 'function') {
      if(validate !== '') throw new Error(`Validate takes a function, received ${typeof(validate)}`);
    }

    this._validate = validate;

    return this;
  }

  /**
   * Setups an empty response check in the validation section.
   * @returns {Question}
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
   * @returns {{name: string, type: string, message: string}}
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
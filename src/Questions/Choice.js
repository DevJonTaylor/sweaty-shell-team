const { camelCase, isEmpty } = require('../../lib/tools/strings');
const { isUndefined } = require('../../lib/tools/typeChecks');

/**
 * The Choice class is used to create a choice object that can be used in a form
 * @property {string} _name
 * @property {string} _value
 * @property {string} _key
 * @property {boolean} _checked
 * @property {boolean} _disabled
 * */
class Choice {
  _name = '';
  _value = '';
  _checked = false;
  _disabled = false;
  _key = '';

  /**
   * Create a new Choice object
   * @param { string } name - The name of the choice.
   */
  constructor(name) {
    if(isUndefined(name)) throw new Error('Choice requires a name.  You must provide one when creating a new one.');
    this._name = name;
  }

  /**
   * Set the name of the function
   * @param {string|undefined}value - The value to set the name to.
   * @returns {Choice|string}.
   */
  name(value) {
    if(isUndefined(value)) return this._name;
    this._name = value;

    return this;
  }

  /**
   * *If no value is passed in, return the current value.
   * *If a value is passed in, set the current value to the camel cased version of the value and return
   * this
   * @param {string|undefined} value - The value to set the property to.
   * @returns {Choice|string}
   */
  value(value) {
    if(typeof value === 'undefined') return this._value;
    this._value = camelCase(value);

    return this;
  }

  /**
   * Returns the value of the checked property
   * @returns {boolean}
   */
  get isChecked() {
    return this._checked;
  }

  /**
   * The `checked` property is a getter and setter.
   * It toggles between true and false.
   * @returns {Choice}.
   */
  get checked() {
    this._checked = !this._checked;

    return this;
  }

  /**
   * Returns a boolean value that indicates whether the button is disabled
   * @returns {boolean}.
   */
  get isDisabled() {
    return this._disabled;
  }

  /**
   * The `disabled` property is set to the opposite of its current value.
   * It toggles between true and false.
   *
   * @returns {Choice}.
   */
  get disabled() {
    this._disabled = !this._disabled;

    return this;
  }

  /**
   * If the key parameter is not provided it will return the current value.
   * Otherwise, it will set the value provided and return this for chaining.
   * @param {string|undefined} key
   * @returns {Choice|string}
   */
  key(key = undefined) {
    if(isUndefined(key)) return this._key;
    this._key = key;

    return this;
  }

  /**
   *
   * @returns {{
   *    name: string,
   *    value: string,
   *    key?: string,
   *    checked?: boolean,
   *    disabled?: boolean
   * }}
   */
  get toObject() {
    const returnMe = {
      name: this._name,
      value: ''
    };

    const [ isValue, isKey ] = isEmpty(this._value, this._key);
    if(this.isChecked) returnMe.checked = true;
    if(this.isDisabled) returnMe.disabled = true;
    if(!isValue) returnMe.value = this._value;
    else returnMe.value = camelCase(returnMe.name);
    if(!isKey) returnMe.key = this._key;

    return returnMe;
  }
}

module.exports = Choice;
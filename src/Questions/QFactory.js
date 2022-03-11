const { isUndefined, isString } = require('../../lib/tools/typeChecks');
const { Input, List } = require('./');
const { prompt } = require('inquirer');
/**
 * @typedef {Question|List|Input|Choice} QuestionTypes
 * @typedef {function(question: QuestionTypes | null): void} QuestionCallback
 */

class QFactory {
  /**
   * @private
   * @type {Map<string, QuestionTypes>} */
  static _collection = new Map();

  /**
   * Add a question to the question list
   * @param {QuestionTypes} q
   * @param {string | QuestionCallback} [msg]
   * @param {QuestionCallback} [cb]
   * @returns {QFactory}
   * @private
   */
  static _addQuestion(q, msg, cb) {
    const [ isMsgUnd, isCbUnd ] = isUndefined(msg, cb);
    this._collection.set(q._name, q);

    if(isMsgUnd && isCbUnd) return this;

    if(isCbUnd) {
      if(isString(msg)) q.message(msg);
      else msg(q);

      return this;
    }

    cb(q.message(msg));

    return this;
  }

  /**
   * Resets the collection back to zero.
   * @private
   */
  static _clearCollection() {
    this._collection = new Map();
  }

  /**
   * Returns if the name of the question exists.
   * @param {string} name
   * @returns {boolean}
   */
  static hasQuestion(name) {
    return this._collection.has(name);
  }

  /**
   * Returns a Question to the callback if it exists.  If it does not exist the callback receives null.
   * @param {string} name
   * @param {QuestionCallback} cb
   * @returns {QFactory}
   */
  static getQuestion(name, cb) {
    if(!this.hasQuestion(name)) cb(null);
    else cb(this._collection.get(name));

    return this;
  }

  /**
   * Creates a new Input class and adds it to the collection.
   * If you pass a callback as the second argument it will not pass a message to the new Question.
   * If you pass a string as the second argument it will pass a message to the new Question and to the callback.
   * @param {string} name
   * @param {string | QuestionCallback} [message]
   * @param {QuestionCallback} [cb]
   * @returns {QFactory}
   * @example QFactory.input('input question', 'I am a message', (question) => {
   *   question.validateEmpty;
   * });
   */
  static input(name, message, cb) {
    this._addQuestion(new Input(name), message, cb);

    return this;
  }

  /**
   * Creates a new List class and adds it to the collection.
   * If you pass a callback as the second argument it will not pass a message to the new Question.
   * If you pass a string as the second argument it will pass a message to the new Question and to the callback.
   * @param {string} name
   * @param {string | QuestionCallback} [message]
   * @param {QuestionCallback} [cb]
   * @return {QFactory}
   */
  static list(name, message, cb) {
    this._addQuestion(new List(name), message, cb);

    return this;
  }

  /**
   *
   * @returns {{highlight: boolean, loop: boolean, pageSize: number, choices: *[]}[]}
   */
  static get toObject() {
    return [...this._collection.values()].map(q => q.toObject);
  }

  static get answers() {
    const collection = this.toObject;
    this._clearCollection();
    return prompt(collection);
  }
}

module.exports = QFactory;
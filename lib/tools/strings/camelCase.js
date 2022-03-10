const capitalize = require('./capitalize');

/**
 * Takes a string and removes the spaces and makes each word capitalized, except the first word.
 * @param text {string}
 * @returns {string}
 * @example camelCase('camel case spelling is awesome') // camelCaseSpellingIsAwesome
 */
module.exports = function camelCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0
      ? word
      : capitalize(word))
    .join('');
};
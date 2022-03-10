/**
 * Takes the first character of a string and makes it uppercase.
 * @param str {string}
 * @returns {string}
 * @example capitalize('i am all lowercase') // I am all lowercase
 */
module.exports = function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
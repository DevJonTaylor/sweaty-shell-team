/**
 * Accepts more than one string at a time.
 * If one string is passed a single Boolean is returned.
 * Otherwise, an array.
 * @param str
 * @returns {null|boolean|boolean[]}
 */
module.exports = function isEmpty(...str) {
  return str.length === 0
    ? null
    : str.length === 1
      ? str[0] === ''
      : str.map(s => s === '');
};
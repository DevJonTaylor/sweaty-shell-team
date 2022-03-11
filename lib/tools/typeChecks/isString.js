/**
 * Takes one or more arguments.
 * If they are a string it will return true and false if not.
 * If there are more than one then they will be returned in an array.
 * @param {unknown} str
 * @returns {null|boolean|boolean[]}
 */
function isString(...str) {
  return (str.length === 0)
    ? null
    : (str.length === 1)
      ? typeof(str[0]) === 'string'
      : str.map(s => typeof(s) === 'string');
}

module.exports = isString;
/**
 * Takes one or more arguments.
 * If they are a function it will return true and false if not.
 * If there are more than one then they will be returned in an array.
 * @param {unknown}func
 * @returns {null|boolean|boolean[]}
 */
function isFunction(...func) {
  return func.length === 0
    ? null
    : func.length === 1
      ? typeof(func[0]) === 'function'
      : func.map(f => typeof(f) === 'function');
}

module.exports = isFunction;
const { randomNumber } = require('../numbers');

/**
 * Gets a random item from an array.
 * @param arr {Array<unknown>}
 * @returns {unknown}
 */
function randomNode(arr) {
  return arr[randomNumber(0, arr.length - 1)];
}

module.exports = randomNode;
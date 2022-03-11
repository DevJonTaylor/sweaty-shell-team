/**
 * Returns a random number between the min and max numbers provided.
 * @param min {number}
 * @param max {number}
 * @returns {number}
 */
module.exports = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
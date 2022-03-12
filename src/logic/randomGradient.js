const { randomNode } = require('../../lib/tools/arrays');
const gradient = require('gradient-string');

/**
 * Returns a random gradient multiline setup.
 * @returns {function(text: string): string}
 */
function randomGradient() {
  const gradients = [
    'atlas', 'cristal', 'teen', 'mind',
    'morning', 'vice', 'passion', 'fruit',
    'instagram', 'retro', 'summer', 'rainbow',
    'pastel'
  ];

  const rand = randomNode(gradients);
  const color = gradient[rand].multiline;
  color.getName = () => rand;
  return color;
}

module.exports = randomGradient;
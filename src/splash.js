const { readFile } = require('fs/promises');
const gradient = require('gradient-string');
const { randomNode } = require('../lib/tools/arrays');

/**
 * Returns a random gradient setup.
 * @returns {(string) => string}
 */
function randomizeGradient() {
  const gradients = [
    'atlas', 'cristal', 'teen', 'mind',
    'morning', 'vice', 'passion', 'fruit',
    'instagram', 'retro', 'summer', 'rainbow',
    'pastel'
  ];

  const rand = randomNode(gradients);
  return gradient[gradients[rand]].multiline;
}

/**
 * Simply clears the console and then logs the provided text.
 * @param text {string}
 * @return {void}
 */
function clearAndPrint(text) {
  console.clear();
  console.log(text);
}

/**
 * Gets the splash screen, gets a random gradient and prints everything to the screen.
 * @returns {Promise<void>}
 */
module.exports = async function showSplash() {
  const textFromFile = await readFile('./lib/figlet/splash', 'utf8');
  const gradientColor = randomizeGradient();
  const text = gradientColor(textFromFile);
  return clearAndPrint(text);
};
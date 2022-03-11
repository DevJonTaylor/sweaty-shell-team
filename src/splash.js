const { Console } = require('console');
const { Transform } = require('stream');
const { readFile } = require('fs/promises');
const gradient = require('gradient-string');
const { randomNode } = require('../lib/tools/arrays');

let splashScreen;

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
  return gradient[rand].multiline;
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
async function showSplash() {
  splashScreen = await readFile('./lib/figlet/splash', 'utf8');
  const gradientColor = randomizeGradient();
  const text = gradientColor(splashScreen);
  return clearAndPrint(text);
}



async function refreshScreen(employeeList) {
  const gradientColor = randomizeGradient();
  const newSplash = `${splashScreen}\n${table(employeeList)}`;
  const text = gradientColor(newSplash);
  return clearAndPrint(text);
}

function table(input) {
  // @see https://stackoverflow.com/a/67859384
  const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk); } });
  const logger = new Console({ stdout: ts });
  logger.table(input);
  const table = (ts.read() || '').toString();
  let result = '';
  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, '┌');
    r = r.replace(/^├─*┼/, '├');
    r = r.replace(/│[^│]*/, '');
    r = r.replace(/^└─*┴/, '└');
    r = r.replace(/'/g, ' ');
    result += `${r}\n`;
  }
  return result;
}

module.exports = {
  showSplash,
  refreshScreen
};


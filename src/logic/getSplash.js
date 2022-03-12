const { readFile } = require('fs/promises');
const { resolve } = require('path');
const { isEmpty } = require('../../lib/tools/strings');
let splash = '';
/**
 * Returns the splash screen.
 * @returns {Promise<string>}
 */
async function getSplash() {
  if(isEmpty(splash)) splash = await readFile(resolve(`${__dirname}/../../lib/figlet/splash`), 'utf8');
  
  return splash;
}

module.exports = getSplash;
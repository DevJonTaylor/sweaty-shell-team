const { writeFile } = require('fs/promises');

/**
 * Writes the HTML to the file in ./dist
 * @param html
 * @returns {Promise<void>}
 */
function writeHtml(html) {
  return writeFile(`${__dirname}/../../dist/team.html`, html, 'utf8');
}

module.exports = writeHtml;
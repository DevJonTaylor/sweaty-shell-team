const { readFile } = require('fs/promises');

/**
 * Reads the HTML text from the document.
 * @returns {Promise<string>}
 */
function getHtmlTemplate() {
  return readFile(`${__dirname}/../../lib/template.html`, 'utf8');
}

module.exports = getHtmlTemplate;
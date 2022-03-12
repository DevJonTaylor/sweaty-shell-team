const { Transform } = require('stream');
const { Console } = require('console');

/**
 * I found this snippet on a Stack Overflow post.
 * Completely removes the index column.
 * @see https://stackoverflow.com/a/69874540
 * @param {Array<unknown>} input
 * @returns {string}
 */
function displayTable(input) {
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

module.exports = displayTable;
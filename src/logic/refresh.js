const { isUndefined } = require('../../lib/tools/typeChecks');
const getSplash = require('./getSplash');
const displayTable = require('./displayTable');
const randomGradient = require('./randomGradient');
const screenPrint = require('./screenPrint');

/**
 * Refreshes the screen before asking questions to the user.
 * @param {Array<EmployeeObject>} [employees]
 * @returns {Promise<void>}
 */
async function refresh(employees) {
  const color = randomGradient();
  const queue = [await getSplash()];

  if(!isUndefined(employees) && employees.length !== 0) queue.push(displayTable(employees));

  screenPrint(color(queue.join('\n')));
}

module.exports = refresh;
const splash = require('./splash');
const { prompt } = require('inquirer');

function start() {
  splash()
    .then(() => console.log('lets go!'))
    .catch(console.error);
}

module.exports = start;
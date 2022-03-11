const splash = require('./splash');
const start = require('./scenes/start');
const nextStep = require('./scenes/nextStep');
function begin() {
  const employees = [];
  splash()
    .then(start)
    .then(nextStep)
    .catch(console.error);
}

module.exports = begin;
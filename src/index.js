const {showSplash} = require('./splash');
const start = require('./scenes/start');
const nextStep = require('./scenes/nextStep');
function begin() {

  showSplash()
    .then(start)
    .then(nextStep)
    .catch(console.error);
}

module.exports = begin;
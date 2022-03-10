const splash = require('./splash');

function start() {
  splash()
    .then(() => console.log('lets go!'))
    .catch(console.error);
}

module.exports = start;
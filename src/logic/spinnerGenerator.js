const Spinner = require('spinnies');
const {bouncingBall} = require('cli-spinners');
const { nanoid } = require('nanoid');

class SpinIcon {
  name = nanoid(12);
  spinner = new Spinner({ color: 'blue', succeedColor: 'green', spinners: bouncingBall });

  start(text) {
    this.spinner.add(this.name, { text });
  }

  pass(text) {
    this.spinner.succeed(this.name, { text });
  }

  fail(text) {
    this.spinner.fail(this.name, { text });
  }
}

module.exports = SpinIcon;
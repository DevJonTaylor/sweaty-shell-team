const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
  _role = 'Engineer';
  github = '';

  getGithub() {
    return this.github;
  }

  setGithub(github) {
    this.github = github;
  }
};
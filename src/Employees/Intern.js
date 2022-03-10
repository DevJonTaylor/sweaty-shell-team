const Employee = require('./Employee');

module.exports = class Intern extends Employee {
  _role = 'Intern';
  school = '';

  getSchool() {
    return this.school;
  }

  setSchool(school) {
    this.school = school;
  }
};
const Employee = require('./Employee');

module.exports = class Manager extends Employee {
  _role = 'Manager';
  officeNumber = '';

  setOfficeNumber(num) {
    this.officeNumber = num;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
};
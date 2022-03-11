const Employee = require('./Employee');

module.exports = class Manager extends Employee {
  _role = 'Manager';
  officeNumber = '';
  _card = {
    color: 'bg-info',
    icon: 'briefcase-fill'
  };
  setOfficeNumber(num) {
    this.officeNumber = num;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  get basicObject() {
    return super.toObject;
  }

  get toObject() {
    return {
      ...super.toObject,
      'Office Number': this.officeNumber
    };
  }

  get render() {
    const superArray = super.render;
    superArray.push(this.getListItem('Office Number', this.officeNumber));
    return superArray;
  }
};
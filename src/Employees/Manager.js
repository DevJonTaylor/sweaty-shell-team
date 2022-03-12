const Employee = require('./Employee');

/**
 * @class
 * @inheritDoc
 * @extends {Employee}
 * @property {string} officeNumber
 */
module.exports = class Manager extends Employee {
  _role = 'Manager';
  officeNumber = '';
  _card = {
    color: 'bg-info',
    icon: 'briefcase-fill'
  };

  /**
   * Set the office number of the employee
   * @param {string} num - The number of the office.
   */
  setOfficeNumber(num) {
    this.officeNumber = num;
  }

  /**
   * Get the office number of the employee
   * @returns {string}
   */
  getOfficeNumber() {
    return this.officeNumber;
  }

  /**
   * Returns parent toObject for easy access.
   * @returns {{Role: string, Email: string, ID: string, Name: string}}
   */
  get basicObject() {
    return super.toObject;
  }

  /**
   * Adds the Manager properties to the HTML card.
   * @returns {Array<string>}
   */
  get render() {
    const superArray = super.render;
    superArray.push(this.getListItem('Office Number', this.officeNumber));
    return superArray;
  }
};
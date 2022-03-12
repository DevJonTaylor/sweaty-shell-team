const Employee = require('./Employee');

/**
 * @class
 * @inheritDoc Employee
 * @property {string} school
 */
class Intern extends Employee {
  _role = 'Intern';
  school = '';
  _card = {
    color: 'bg-success',
    icon: 'book-half'
  };

  /**
   * Gets the string value of the school property and returns it.
   * @returns {string}
   */
  getSchool() {
    return this.school;
  }

  /**
   * Sets the provided value to the school property.
   * @param {string} school
   */
  setSchool(school) {
    this.school = school;
  }

  /**
   * Get the bare basics for this class. Role, Email, ID, and Name.
   * @returns {{Role: string, Email: string, ID: string, Name: string}}
   */
  get basicObject() {
    return super.toObject;
  }

  /**
   * Adds the interns portion of the class to the card that will be provided during toString.
   * @returns {Array<string>}
   */
  get render() {
    const superArray = super.render;
    superArray.push(this.getListItem('School', this.school));
    return superArray;
  }
}

module.exports = Intern;
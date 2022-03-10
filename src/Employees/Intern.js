const Employee = require('./Employee');

module.exports = class Intern extends Employee {
  _role = 'Intern';
  school = '';
  _card = {
    color: 'bg-success',
    icon: 'book-half'
  };
  getSchool() {
    return this.school;
  }

  setSchool(school) {
    this.school = school;
  }

  get render() {
    const superArray = super.render;
    superArray.push(this.getListItem('School', this.school));
    return superArray;
  }
};
module.exports = class Employee {
  name = '';
  id = '';
  email = '';
  _role = 'Employee';

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this._role;
  }

  setName(name) {
    this.name = name;
  }

  setId(id) {
    this.id = id;
  }

  setEmail(email) {
    this.email = email;
  }
};
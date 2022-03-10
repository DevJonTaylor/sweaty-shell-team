/* eslint-disable no-undef */
const testProps = {
  id: 3,
  first_name: 'Yolanthe',
  last_name: 'Mardee',
  email: 'ymardee2@phoca.cz',
  user: 'ymardee2',
  school: 'Perm State Academy of Agriculture',
  officeNumber: '993-237-8134',
  role: 'Manager'
};

const Manager = require('../src/Employees/Manager');

describe('Manager Class', () => {
  const manager = new Manager();

  test('Manager\'s get and set office number method.', () => {
    manager.setOfficeNumber(testProps.officeNumber);
    expect(manager.getOfficeNumber()).toBe(testProps.officeNumber);
  });

  test('Manager\'s get role method.', () => {
    expect(manager.getRole()).toBe(testProps.role);
  });
});
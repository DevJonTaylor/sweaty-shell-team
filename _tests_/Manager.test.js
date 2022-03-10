/* eslint-disable no-undef */
const { toString, createLi, createIcon } = require('./tools');
const testProps = {
  id: 3,
  bg: 'bg-info',
  name: 'Yolanthe Mardee',
  email: 'ymardee2@phoca.cz',
  officeNumber: '993-237-8134',
  role: 'Manager',
  roleIcon: createIcon('briefcase-fill')
};
const listItems = [ createLi(`Office Number: ${testProps.officeNumber}`, testProps.officeNumber) ];
testProps.listItems = listItems.join('\n');
const Manager = require('../src/Employees/Manager');

describe('Manager Class', () => {
  const manager = new Manager();

  test('Manages get and set office number method.', () => {
    manager.setOfficeNumber(testProps.officeNumber);
    expect(manager.getOfficeNumber()).toBe(testProps.officeNumber);
  });

  test('Manages get role method.', () => {
    expect(manager.getRole()).toBe(testProps.role);
  });

  test('Managers toString method', () => {
    manager.setName(testProps.name);
    manager.setEmail(testProps.email);
    manager.setId(testProps.id);
    manager.setOfficeNumber(testProps.officeNumber);
    expect(manager.toString()).toBe(toString(testProps));
  });
});
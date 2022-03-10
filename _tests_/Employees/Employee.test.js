/* eslint-disable no-undef */
const Employee = require('../../src/Employees/Employee');
const { toString } = require('../tools');
const testProps = {
  id: 4,
  name: 'Errol Barg',
  email: 'ebarg3@imdb.com',
  role: 'Employee'
};

describe('Employee Class', () => {
  const employee = new Employee();
  test('Employees set and get name.', () => {
    employee.setName(testProps.name);
    expect(employee.getName()).toBe(testProps.name);
  });

  test('Employees set and get email.', () => {
    employee.setEmail(testProps.email);
    expect(employee.getEmail()).toBe(testProps.email);
  });

  test('Employees set and get id.', () => {
    employee.setId(testProps.id);
    expect(employee.getId()).toBe(testProps.id);
  });

  test('Employees getRole method.', () => {
    expect(employee.getRole()).toBe(testProps.role);
  });

  test('Employees toString method', () => {
    employee.setName(testProps.name);
    employee.setEmail(testProps.email);
    employee.setId(testProps.id);
    expect(employee.toString()).toBe(toString(testProps));
  });
});
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

  test('getCopyIcon function', () => {
    expect(employee.getCopyIcon('tagged')).toEqual('<i class="bi bi-clipboard-fill copy-me float-end" data-copy="tagged"></i>');
    expect(employee.getCopyIcon('tagged', false)).toEqual('<i class="bi bi-clipboard-fill copy-me" data-copy="tagged"></i>');
  });

  test('getAnchor function', () => {
    const anchor = employee.getAnchor('Hello', 'https://github.com/devjontaylor');
    const noTargetBlank = employee.getAnchor('Hello', 'https://github.com/devjontaylor', false);

    expect(anchor).toEqual('<a href="https://github.com/devjontaylor" target="_blank">Hello</a>');
    expect(noTargetBlank).toEqual('<a href="https://github.com/devjontaylor">Hello</a>');
  });
});
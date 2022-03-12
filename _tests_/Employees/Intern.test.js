/* eslint-disable no-undef */
const { toString, createLi, createIcon } = require('../tools');
const testProps = {
  id: 2,
  name: 'Viv Ricci',
  bg: 'bg-success',
  email: 'vricci1@reference.com',
  school: 'Minot State University',
  role: 'Intern',
  roleIcon: createIcon('book-half')
};
testProps.listItems = createLi(`School: ${testProps.school}`, testProps.school);
const Intern = require('../../src/Employees/Intern');

describe('Intern Class', () => {
  const intern = new Intern();

  test('Interns get and set methods for github.', () => {
    intern.setSchool(testProps.school);
    expect(intern.getSchool()).toBe(testProps.school);
  });

  test('Interns getRole method.', () => {
    expect(intern.getRole()).toBe(testProps.role);
  });

  test('Employees toString method', () => {
    intern.setName(testProps.name);
    intern.setEmail(testProps.email);
    intern.setId(testProps.id);
    intern.setSchool(testProps.school);
    expect(intern.toString()).toBe(toString(testProps));
  });

  test('getter basicObject', () => {
    const testData = {
      'ID': 8880,
      'Name': 'Raul Sheldrick',
      'Email': 'rsheldrick1@opensource.org',
      'Role': 'Intern'
    };
    intern.setName(testData.Name);
    intern.setEmail(testData.Email);
    intern.setId(testData.ID);
    expect(intern.basicObject).toEqual(testData);
  });
});
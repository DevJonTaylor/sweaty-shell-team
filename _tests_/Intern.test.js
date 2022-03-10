/* eslint-disable no-undef */

const testProps = {
  id: 2,
  name: 'Viv Ricci',
  email: 'vricci1@reference.com',
  user: 'vricci1',
  school: 'Minot State University',
  officeNumber: '350-493-8901',
  role: 'Intern'
};

const Intern = require('../src/Employees/Intern');

describe('Intern Class', () => {
  const intern = new Intern();

  test('Intern\'s get and set methods for github.', () => {
    intern.setSchool(testProps.school);
    expect(intern.getSchool()).toBe(testProps.school);
  });

  test('Intern\'s getRole method.', () => {
    expect(intern.getRole()).toBe(testProps.role);
  });
});
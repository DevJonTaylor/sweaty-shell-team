/* eslint-disable no-undef */
const testProps = {
  id: 1,
  first_name: 'Juana',
  last_name: 'Sommerscales',
  email: 'jsommerscales0@liveinternet.ru',
  user: 'jsommerscales0',
  school: 'Hanseo University',
  officeNumber: '560-738-4635',
  role: 'Engineer'
};
const Engineer = require('../src/Employees/Engineer');


describe('Engineer Class', () => {
  const engineer = new Engineer();

  test('Engineer\'s get and set methods for github.', () => {
    engineer.setGithub(testProps.user);
    expect(engineer.getGithub()).toBe(testProps.user);
  });

  test('Engineer\'s getRole method.', () => {
    expect(engineer.getRole()).toBe(testProps.role);
  });
});
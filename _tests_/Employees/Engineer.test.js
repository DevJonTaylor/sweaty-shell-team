/* eslint-disable no-undef */
const { toString, createLi, createIcon, createAnchor } = require('../tools');
const testProps = {
  id: 1,
  bg: 'bg-black',
  name: 'Juana Sommerscales',
  email: 'jsommerscales0@liveinternet.ru',
  user: 'jsommerscales0',
  role: 'Engineer',
  roleIcon: createIcon('github')
};
const github = createAnchor(`https://github.com/${testProps.user}`, testProps.user);
testProps.listItems = createLi(`GitHub: ${github}`, testProps.user);

const Engineer = require('../../src/Employees/Engineer');

describe('Engineer Class', () => {
  const engineer = new Engineer();

  test('Engineers get and set methods for github.', () => {
    engineer.setGithub(testProps.user);
    expect(engineer.getGithub()).toBe(testProps.user);
  });

  test('Engineers getRole method.', () => {
    expect(engineer.getRole()).toBe(testProps.role);
  });

  test('Engineers toString method.', () => {
    engineer.setName(testProps.name);
    engineer.setEmail(testProps.email);
    engineer.setId(testProps.id);
    engineer.setGithub(testProps.user);
    expect(engineer.toString()).toBe(toString(testProps));
  });

  test('getter basicObject', () => {
    const testData = {
      'ID': 1047,
      'Name': 'Lester Stairmand',
      'Email': 'lstairmand0@engadget.com',
      'Role': 'Engineer'
    };
    engineer.setName(testData.Name);
    engineer.setEmail(testData.Email);
    engineer.setId(testData.ID);
    expect(engineer.basicObject).toEqual(testData);
  });
});
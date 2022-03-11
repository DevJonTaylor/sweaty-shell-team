/* eslint-disable no-undef */
const Input = require('../../src/Questions/Input');
const List = require('../../src/Questions/List');
const QF = require('../../src/Questions/QFactory');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('QFactory class', () => {
  test('input method', () => {
    QF.input('input', 'message', q => {
      expect(q).toBeInstanceOf(Input);
      expect(q.message()).toBe('message');
    });
  });

  test('list method', () => {
    QF.list('list', 'message', q => {
      expect(q).toBeInstanceOf(List);
    });
  });

  test('hasQuestion method', () => {
    expect(QF.hasQuestion('list')).toBeTruthy();
    expect(QF.hasQuestion('llist')).toBeFalsy();
  });

  test('getQuestion method', () => {
    QF.list('list')
      .getQuestion('list', q => {
        expect(q).toBeInstanceOf(List);
      });
    QF.getQuestion('llist', q => {
      expect(q).toBeFalsy();
    });
  });

  test('getter toObject', () => {
    const serializeMe = [
      { type: 'input', name: 'input', message: 'message' },
      {
        type: 'list',
        name: 'list',
        message: 'list message',
        highlight: false,
        choices: [ {name: 'a', value: 'a'} , {name: 'b', value: 'b'} ],
        pageSize: 10,
        loop: true
      }
    ];
    QF.input('input', 'message')
      .list('list', 'list message', list => {
        list.newChoices(['a', 'b']);
      });

    const toObject = QF.toObject;
    expect(JSON.stringify(toObject)).toBe(JSON.stringify(serializeMe));
  });

  test('getter answers', () => {
    expect.assertions(1);
    QF._clearCollection();
    inquirer.prompt.mockResolvedValue({ email: 'some@example.com' });
    QF.input('email', 'What is your email address?');
    return QF.answers.then(answers => expect(answers).toEqual({ email: 'some@example.com' }));
  });
});
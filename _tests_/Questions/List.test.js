/* eslint-disable no-undef */
const List = require('../../src/Questions/List');
const Choice = require('../../src/Questions/Choice');
const { Separator } = require('inquirer');

describe('List Class', () => {
  test('Instantiate', () => {
    const list = new List('a new list');
    expect(list._type).toBe('list');
  });

  test('newChoice, hasChoice, getChoice, and removeChoice method', () => {
    const list = new List('a new list');
    list.newChoice('choice1', choice => {
      expect(choice).toBeInstanceOf(Choice);
      expect(list.hasChoice('choice1')).toBe(true);
      expect(list.hasChoice('choice2')).toBe(false);
    }).getChoice('choice1', choice => {
      expect(choice).toBeInstanceOf(Choice);
    }).getChoice('choice2', choice => {
      expect(choice).toBeFalsy();
    }).removeChoice('choice1')
      .getChoice('choice1', choice => {
        expect(choice).toBeFalsy();
      });
  });

  test('newChoices method', () => {
    const list = new List('a new list');
    list.newChoices(['choice1', 'choice2', 'choice3'], ({choice1, choice2, choice3}) => {
      expect(choice1).toBeInstanceOf(Choice);
      expect(choice2).toBeInstanceOf(Choice);
      expect(choice3).toBeInstanceOf(Choice);
    });
  });

  test('pageSize method', () => {
    const list = new List('a new list');
    expect(list.pageSize(12)._pageSize).toBe(12);
  });

  test('addSeparator method', () => {
    const list = new List('a new list');
    list.addSeparator('abc');
    list.getChoice('abc', choice => {
      expect(choice).toBeInstanceOf(Separator);
    });
  });

  test('getter highlight', () => {
    const list = new List('a new list');
    expect(list.isHighlight).toBeFalsy();
    expect(list.highlight.isHighlight).toBeTruthy();
  });

  test('getter loop', () => {
    const list = new List('a new list');
    expect(list.isLoop).toBeTruthy();
    expect(list.loop.isLoop).toBeFalsy();
  });

  test('getter toObject', () => {
    const toBe = {
      type: 'list',
      name: 'aNewList',
      message: 'hello',
      highlight: true,
      choices: [
        { name: 'a', value: 'a' },
        { name: 'b', value: 'b' },
        { name: 'c', value: 'c' }
      ],
      pageSize: 10,
      loop: true
    };
    const list = new List('a new list');
    list.newChoices(['a', 'b', 'c'], choices => choices)
      .highlight
      .message('hello');
    expect(JSON.stringify(list.toObject)).toBe(JSON.stringify(toBe));
  });
});
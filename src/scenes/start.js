const QFactory = require('../Questions/QFactory');
const {Manager} = require('../Employees');
async function start() {
  const validateEmpty = question => question.validateEmpty;
  const validateEmail = question => question.validate(email => /^.+@[^.].*\.[a-z]{2,}$/.test(email)
    ? true
    : 'Please provide a valid email address.');
  const data = await QFactory
    .input ('set id', 'What is the team manager\'s employee ID?', validateEmpty)
    .input('set name', 'What is the team manager\'s name?', validateEmpty)
    .input('set email', 'What is the team manager\'s email address?', validateEmail)
    .input('set office number', 'What is the team manager\'s office number?', validateEmpty)
    .answers;

  const manager = new Manager();

  Object.entries(data).map(arr => {
    manager[arr[0]](arr[1]);
  });

  return manager;
}

module.exports = start;
const { refreshScreen } = require('../splash');

const { readFile, writeFile } = require('fs/promises');
const {resolve} = require('path');

const validateEmpty = question => question.validateEmpty;
const validateEmail = question => question.validateEmail;
const validateId = question => question.validate(id => employees.find(emp => emp.id === id)
  ? 'Please provide a unique Employee ID.'
  : true);
async function nextStep(employee) {
  employees.push(employee);
  displayEmployees.push(employee.basicObject);
  await refreshScreen(displayEmployees);

  const data = await QFactory.list('what next', 'What would you like to do next?', list =>
    list.newChoice('Add Engineer', eng => eng.value('engineer'))
      .newChoice('Add Intern', intern => intern.value('intern'))
      .addSeparator('1')
      .newChoice('Finish building your team', choice => choice.value('finish'))
  ).answers;
  
  switch(data.whatNext) {
  case 'engineer':
    return addEngineer();
  case 'intern':
    return addIntern();
  case 'finish':
  default:
    return finish();
  }
}

async function addEngineer() {
  const data = await QFactory;

  const eng = new Engineer();
  Object.entries(data).map(arr => eng[arr[0]](arr[1]));

  return nextStep(eng);
}

async function addIntern() {
  const data = await QFactory.input('set id', 'What is the employee ID of your Intern?', validateId)
    .input('set name', 'What is their name?', validateEmpty)
    .input('set email', 'What is their email address?', validateEmail)
    .input('set school', 'What school did they attend?', validateEmpty)
    .answers;

  const intern = new Intern();
  Object.entries(data).map(arr => intern[arr[0]](arr[1]));

  return nextStep(intern);
}

module.exports = nextStep;
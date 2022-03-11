const { refreshScreen } = require('../splash');
const QFactory = require('../Questions/QFactory');
const { Engineer, Intern } = require('../Employees');
const Spinnies = require('spinnies');
const {bouncingBall} = require('cli-spinners');
const spinner = bouncingBall;
const spinnies = new Spinnies({ color: 'blue', succeedColor: 'green', spinner });
const { readFile, writeFile } = require('fs/promises');
const {resolve} = require('path');
const employees = [];
const displayEmployees = [];

const validateEmpty = input => input.validateEmpty;

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
  const data = await QFactory.input('set id', 'What is the employee ID of your Engineer?', validateEmpty)
    .input('set name', 'What is their name?', validateEmpty)
    .input('set email', 'What is their email address?', validateEmpty)
    .input('set github', 'What is their GitHub User name?', validateEmpty)
    .answers;

  const eng = new Engineer();
  Object.entries(data).map(arr => eng[arr[0]](arr[1]));

  return nextStep(eng);
}

async function addIntern() {
  const data = await QFactory.input('set id', 'What is the employee ID of your Intern?', validateEmpty)
    .input('set name', 'What is their name?', validateEmpty)
    .input('set email', 'What is their email address?', validateEmpty)
    .input('set school', 'What school did they attend?', validateEmpty)
    .answers;

  const intern = new Intern();
  Object.entries(data).map(arr => intern[arr[0]](arr[1]));

  return nextStep(intern);
}

async function finish() {
  spinnies.add('spinner-1', { text: 'Build Team HTML file.' });
  const html = await readFile(resolve(__dirname, '../template.html'), 'utf8');
  writeFile(resolve(__dirname, '../../dist/team.html'), html.replace('$$team_members$$', employees.join('\n')), 'utf8')
    .then(() => {
      spinnies.succeed('spinner-1', {text: 'Successfully created!'});
      console.log(resolve(__dirname, '../../dist/team.html'));
    })
    .catch(err => {
      spinnies.fail('spinner-1', 'Unable to locate file.');
      console.error(err);
    });
}

module.exports = nextStep;
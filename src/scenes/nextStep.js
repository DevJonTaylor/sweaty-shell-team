const QFactory = require('../Questions/QFactory');
const employees = [];

async function nextStep(employee) {
  employees.push(employee);
  const data = await QFactory.list('what next', 'What would you like to do next?', list =>
    list.newChoice('Add Engineer', eng => eng.value('engineer'))
      .newChoice('Add Intern', intern => intern.value('intern'))
      .addSeparator('1')
      .newChoice('Finish building your team', choice => choice.value('finish'))
  ).answers;

  console.log(data);
}

module.exports = nextStep;
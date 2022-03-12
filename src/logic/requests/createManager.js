const F = require('../../Questions/QFactory');
const { Manager } = require('../../Employees');

/**
 * Creates a new Manager object based on the answers to the prompts provided to the user.
 * @returns {Promise<Manager>}
 */
async function createManager() {
  const manager = new Manager();
  const answers = await F
    .input('id', 'What is the Employee ID for the manager?', F.validateEmpty)
    .input('name', 'What is the manager\'s name?', F.validateEmpty)
    .input('email', 'What is the manager\'s email address?', F.validateEmail)
    .input('Office Number', 'What is the manager\'s office number?', F.validateEmpty)
    .answers;

  manager.setId(answers.id);
  manager.setName(answers.name);
  manager.setEmail(answers.email);
  manager.setOfficeNumber(answers.officeNumber);

  return manager;
}

module.exports = createManager;
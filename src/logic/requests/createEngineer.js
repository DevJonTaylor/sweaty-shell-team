const F = require('../../Questions/QFactory');
const { Engineer } = require('../../Employees');

/**
 * Creates a new Manager object based on the answers to the prompts provided to the user.
 * @param {Array<(string | number)>} ids
 * @returns {Promise<Engineer>}
 */
async function createEngineer(ids) {
  const eng = new Engineer();
  const answers = await F
    .input('id', 'What is the employee ID of your Engineer?', i => i
      .validate(v => v === ''
        ? 'ID cannot be empty.'
        : !ids.find(id => id === v)
          ? true
          : 'Please select a Unique Employee ID'
      )
    )
    .input('name', 'What is their name?', F.validateEmpty)
    .input('email', 'What is their email address?', F.validateEmail)
    .input('github', 'What is their GitHub User name?', F.validateEmpty)
    .answers;

  eng.setId(answers.id);
  eng.setName(answers.name);
  eng.setEmail(answers.email);
  eng.setGithub(answers.github);

  return eng;
}

module.exports = createEngineer;
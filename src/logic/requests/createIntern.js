const F = require('../../Questions/QFactory');
const { Intern } = require('../../Employees');

/**
 * Creates a new Manager object based on the answers to the prompts provided to the user.
 @param {Array<(string | number)>} ids
 * @returns {Promise<Intern>}
 */
async function createIntern(ids) {
  return F
    .input('id', 'What is the employee ID of your intern?', i => i
      .validate(v => v === ''
        ? 'ID cannot be empty.'
        : !ids.find(id => id === v)
          ? true
          : 'Please select a Unique Employee ID'
      )
    )
    .input('name', 'What is their name?', F.validateEmpty)
    .input('email', 'What is their email address?', F.validateEmail)
    .input('school', 'What school did they attend?', F.validateEmpty)
    .answers
    .then(async answers => {
      const intern = new Intern();

      intern.setId(answers.id);
      intern.setName(answers.name);
      intern.setEmail(answers.email);
      intern.setSchool(answers.school);

      return intern;
    });
}

module.exports = createIntern;
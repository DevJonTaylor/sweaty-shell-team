const F = require('../../Questions/QFactory');

function getRequest() {
  return F.list('Get Request', 'What would like to do now?', list => {
    list.newChoices(['Add Engineer', 'Add Intern'], ({ addEngineer, addIntern }) => {
      addEngineer.value('Create Engineer');
      addIntern.value('Create Intern');
    })
      .addSeparator(1)
      .newChoice('Finished Building Your Team', c => c.value('renderAndExit'))
      .highlight;
  })
    .answers;
}

module.exports = getRequest;


const screenPrint = require('../screenPrint');
const getHtmlTemplate = require('../GetHtmlTemplate');
const writeHtml = require('../writeHtml');
const {resolve} = require('path');
const SpinIcon = require('../spinnerGenerator');
const open = require('open');

async function renderAndExit(employees) {
  const spinner = new SpinIcon();
  screenPrint('');
  spinner.start('Generating your team!');
  const template = await getHtmlTemplate();
  const html = template.replace('$$team_members$$', employees.join('\n'));
  const htmlPath = resolve(__dirname, '../../../dist/team.html');
  writeHtml(html)
    .then(() => {
      open.openApp(open.apps.chrome, { arguments: [htmlPath] });
      spinner.pass(`File created successfully here \n\n${htmlPath}`);
    })
    .catch(err => {
      if(err.message === 'Expected a `name`') { // Error that is thrown when Open cannot open chrome.
        console.log('It would seem that this app cannot open Chrome or it does not exist on your platform.');
        console.log(`However you can access your team.html file below \n\n${htmlPath}`);
        spinner.pass('File created successfully here!');
      } else {
        spinner.fail(err);
        console.error(err);
      }
    });
}

module.exports = renderAndExit;
const QF = require('./src/Questions/QFactory');

QF.list('test list', 'Pick one', list => list.newChoice('Choice A')
  .newChoice('Choice B')
  .addSeparator('1')
  .newChoice('Choice C'));

console.log(JSON.stringify(QF.toObject));
console.log(QF.toObject);
// ).answers.then(console.log).catch(console.error);


// require('./src')();
const refresh = require('./logic/refresh');
const getRequest = require('./logic/requests/getRequests');
const renderAndExit = require('./logic/requests/renderAndExit');
const createManager = require('./logic/requests/createManager');
const createEngineer = require('./logic/requests/createEngineer');
const createIntern = require('./logic/requests/createIntern');

const SLEEPING = 0;
const WAKING = 1;
const WORKING = 2;
const WAITING = 3;
const ERROR = 4;
const QUITING = 5;

class App {
  state = SLEEPING;
  employees = [];
  displayEmp = [];

  get ids() {
    return this.displayEmp.map(empObj => empObj.ID);
  }
  
  set(employee) {
    this.employees.push(employee);
    this.displayEmp.push(employee.basicObject);
  }
  
  start() {
    this.state = WAKING;
    this.wake();
  }

  wake() {
    refresh()
      .then(createManager)
      .then(mgr => this.set(mgr))
      .then(() => this.wait())
      .catch(error => this.error(error));
  }

  work(req) {
    this.state = WORKING;


    switch(req) {
    case 'createEngineer':
      createEngineer(this.ids)
        .then(emp => this.set(emp))
        .then(() => this.wait())
        .catch(error => this.error(error));
      break;
    case 'createIntern':
      createIntern(this.ids)
        .then(emp => this.set(emp))
        .then(() => this.wait())
        .catch(error => this.error(error));
      break;
    default:
      this.quit();
      break;
    }
  }

  wait() {
    this.state = WAITING;

    refresh(this.displayEmp)
      .then(() => getRequest())
      .then(answer => this.work(answer.getRequest))
      .catch(error => this.error(error));
  }

  error(err) {
    this.state = ERROR;
    console.error(err);
    process.exit(1);
  }

  quit() {
    this.state = QUITING;
    renderAndExit(this.employees)
      .catch(error => this.error(error));
  }
}



module.exports = function() {
  const app = new App();
  app.start();
};
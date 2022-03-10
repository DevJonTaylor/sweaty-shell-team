const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
  _role = 'Engineer';
  github = '';
  _card = {
    color: 'bg-black',
    icon: 'github'
  };

  getGithub() {
    return this.github;
  }

  setGithub(github) {
    this.github = github;
  }

  get render() {
    const superArray = super.render;
    const gh = this.getAnchor(this.github, `https://github.com/${this.github}`);
    superArray.push(this.getListItem('GitHub', gh, this.github));
    return superArray;
  }
};
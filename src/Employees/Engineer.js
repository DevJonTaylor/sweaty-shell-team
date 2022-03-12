const Employee = require('./Employee');

/**
 * @class
 * @inheritDoc
 * @extends {Employee}
 * @property {string} github
 */
class Engineer extends Employee {
  _role = 'Engineer';
  github = '';
  _card = {
    color: 'bg-black',
    icon: 'github'
  };

  /**
   * Get the github property of the user object
   * @returns The github property is being returned.
   */
  getGithub() {
    return this.github;
  }

  /**
   * Set the github property to the value of the github parameter
   * @param github - The GitHub username of the student.
   */
  setGithub(github) {
    this.github = github;
  }

  /**
   * Return the value of the property named by the string "toObject"
   * @returns {{ID: string, Name: string, Email: string, Role: string}}
   */
  get basicObject() {
    return super.toObject;
  }

  /**
   * Adds to the parent render so that the Engineer's portion of the html card is added.
   * @returns {Array<string>}
   */
  get render() {
    const superArray = super.render;
    const gh = this.getAnchor(this.github, `https://github.com/${this.github}`);
    superArray.push(this.getListItem('GitHub', gh, this.github));
    return superArray;
  }
}

module.exports = Engineer;

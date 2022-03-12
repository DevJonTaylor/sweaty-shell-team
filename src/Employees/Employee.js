const { isUndefined } = require('../../lib/tools/typeChecks');
const {isEmpty} = require('../../lib/tools/strings');

/**
 * @typedef {(Employee | Manager | Engineer | Intern)} EmployeeTypes
 * @typedef {{Role: string, Email: string, ID: string, Name: string}} EmployeeObject
 *
 * @class
 * @property {string} name
 * @property {string} id
 * @property {string} email
 * @property {{color: string, icon: string}} _card
 * @property {string} _role
 */
class Employee {
  name = '';
  id = '';
  email = '';

  /** @protected */
  _card = {
    color: '',
    icon: ''
  };

  /** @protected */
  _role = 'Employee';

  /**
   * Return the value of the name property
   * @returns The name of the object.
   */
  getName() {
    return this.name;
  }

  /**
   * Return the id of the object
   * @returns {string}
   */
  getId() {
    return this.id;
  }

  /**
   * Get the email address of the user
   * @returns {string}
   */
  getEmail() {
    return this.email;
  }

  /**
   * Get the role of the user
   * @returns {string}
   */
  getRole() {
    return this._role;
  }

  /**
   * SetName sets the name property of the object to the given name
   * @param {string} name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * SetId sets the id property of the object to the given value.
   * @param {string} id
   */
  setId(id) {
    this.id = id;
  }

  /**
   * Set the email property of the current user
   * @param {string} email
   */
  setEmail(email) {
    this.email = email;
  }

  /**
   * Creates a Bootstrap icon with a <i> element using the copyData string to tell Bootstrap which icon.
   * @param {string} copyData
   * @param {boolean} [isFloat] - This will tell the icon to move to the far right.
   * If that is not desired just pass it false, and it will not include it.
   * @returns {string}
   */
  getCopyIcon(copyData, isFloat = true) {
    const classes = [
      'bi',
      'bi-clipboard-fill',
      'copy-me'
    ];
    if(isFloat) classes.push('float-end');
    return `<i class="${classes.join(' ')}" data-copy="${copyData}"></i>`;
  }

  /**
   * Creates a <li> element specific to their card.
   * 
   * @param {string} title - First part of the <li>
   * @param {string} value - Second part of the <li>
   * @param {string} [rawValue] - At times the value is altered for user experiences.  
   * When that happens place the raw value here.
   * @returns {string}
   */
  getListItem(title, value, rawValue) {
    const copy = (isUndefined(rawValue)) 
      ? this.getCopyIcon(value) 
      : this.getCopyIcon(rawValue);
    return `<li class="list-group-item">${title}: ${value}${copy}</li>`;
  }

  /**
   * Creates an Anchor element.
   * @param {string} text - The visible portion of an anchor text goes here.
   * @param {string} href - The url that the anchor tag directs you to goes here.
   * @param {boolean} [targetBlank] True by default.  True will add the target="_blank" and false will not.
   * @returns {string}
   */
  getAnchor(text, href, targetBlank = true) {
    const attributes = [`href="${href}"`];
    if(targetBlank) attributes.push('target="_blank"');

    return `<a ${attributes.join(' ')}>${text}</a>`;
  }

  /**
   * If the _card.icon value is empty then it will return an empty string.
   * If it is not empty it will return the role's icon.
   * @returns {string}
   */
  getRoleIcon() {
    return isEmpty(this._card.icon) 
      ? '' 
      : `<i class="bi bi-${this._card.icon}"></i>`;
  }

  /**
   * This method gathers all the properties needed to create the html card that is specific to their role.
   * @returns {Array<string>}
   */
  get render() {
    const anchor = this.getAnchor(this.email, `mailto:${this.email}`);
    return [
      this.getListItem('ID', this.id),
      this.getListItem('Email', anchor, this.email)
    ];
  }

  /**
   * Creates a Object Literal format for this class.
   * @returns {EmployeeObject}
   */
  get toObject() {
    return {
      ID: this.id,
      Name: this.name,
      Email: this.email,
      Role: this._role
    };
  }

  /**
   * Creates the HTML Card for this class.
   * @returns {string}
   */
  toString() {
    return `<article class="col-sm-12 col-md-6 col-lg-4 mb-4">
\t<div class="card shadow">
\t\t<div class="card-header ${this._card.color} text-white">
\t\t\t${this.getCopyIcon(this.name)}<h3>${this.name}</h3>
\t\t\t<h3>${this.getRoleIcon()} ${this._role}</h3>
\t\t</div>
\t\t<div class="card-body">
\t\t\t<ul class="list-group list-group-flush">\n\t\t\t\t${this.render.join('\n\t\t\t\t')}
\t\t\t</ul>
\t\t</div>
\t</div>
</article>`;
  }
}

module.exports = Employee;

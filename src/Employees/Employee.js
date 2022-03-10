module.exports = class Employee {
  name = '';
  id = '';
  email = '';
  _card = {
    color: '',
    icon: ''
  };
  _role = 'Employee';

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this._role;
  }

  setName(name) {
    this.name = name;
  }

  setId(id) {
    this.id = id;
  }

  setEmail(email) {
    this.email = email;
  }

  getCopyIcon(copyData, isFloat = true) {
    const classes = [
      'bi',
      'bi-clipboard-fill',
      'copy-me'
    ];
    if(isFloat) classes.push('float-end');
    return `<i class="${classes.join(' ')}" data-copy="${copyData}"></i>`;
  }

  getListItem(title, value, dataValue) {
    const copy = typeof dataValue === 'undefined' ? this.getCopyIcon(value) : this.getCopyIcon(dataValue);
    return `<li class="list-group-item">${title}: ${value}${copy}</li>`;
  }

  getAnchor(text, href, targetBlank = true) {
    const attributes = [`href="${href}"`];
    if(targetBlank) attributes.push('target="_blank"');

    return `<a ${attributes.join(' ')}>${text}</a>`;
  }

  getRoleIcon() {
    return !this._card.icon ? '' : `<i class="bi bi-${this._card.icon}"></i>`;
  }

  get render() {
    const anchor = this.getAnchor(this.email, `mailto:${this.email}`);
    return [
      this.getListItem('ID', this.id),
      this.getListItem('Email', anchor, this.email)
    ];
  }

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
};
function createAnchor(href, text, targetBlank = true) {
  return targetBlank === true
    ? `<a href="${href}" target="_blank">${text}</a>`
    : `<a href="${href}">${text}</a>`;
}

function createLi(text, copy) {
  const li = `<li class="list-group-item">${text}`;
  const i = `<i class="bi bi-clipboard-fill copy-me float-end" data-copy="${copy}"`;
  return `\t\t\t\t${li}${i}></i></li>`;
}

function createIcon(iconName) {
  return `<i class="bi bi-${iconName}"></i>`;
}

function toString({
  name,
  role,
  id,
  email,
  bg = '',
  roleIcon = '',
  listItems = ''
}) {
  if(listItems !== '') listItems = '\n'+listItems;
  return `<article class="col-sm-12 col-md-6 col-lg-4 mb-4">
\t<div class="card shadow">
\t\t<div class="card-header ${bg} text-white">
\t\t\t<i class="bi bi-clipboard-fill copy-me float-end" data-copy="${name}"></i><h3>${name}</h3>
\t\t\t<h3>${roleIcon} ${role}</h3>
\t\t</div>
\t\t<div class="card-body">
\t\t\t<ul class="list-group list-group-flush">
${createLi(`ID: ${id}`, id)}
${createLi(`Email: ${createAnchor(`mailto:${email}`, email)}`, email)}${listItems}
\t\t\t</ul>
\t\t</div>
\t</div>
</article>`;
}

module.exports = {
  createAnchor,
  createLi,
  createIcon,
  toString
};


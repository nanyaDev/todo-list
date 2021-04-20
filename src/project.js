import { newElement } from './helper';
import data from './data';
import { renderToDos } from './render';

const nav = document.querySelector('nav');

const createNavItem = (text, icon, ...classes) => {
  const div = newElement('div', ...classes);
  const i = newElement('i', 'fas', icon);
  const span = newElement('span');
  span.textContent = text;

  if (icon !== 'fa-plus') {
    div.addEventListener('click', e => {
      const todos = data.getProject(text);
      renderToDos(todos, text);
    });
  }

  div.append(i, span);
  nav.appendChild(div);
};

const createNewFolderItem = () => {
  createNavItem('New Folder', 'fa-plus', 'nav-item', 'folder', 'new-folder');
  const new_project = document.querySelector('nav > .new-folder');

  new_project.addEventListener('click', event => {
    new_project.innerHTML = '';
    const input = newElement('input');
    input.addEventListener('keydown', onEnter);
    new_project.appendChild(input);
    input.focus();
  });
};

const onEnter = event => {
  if (event.key === 'Enter') {
    data.newProject(event.target.value);
    renderProjects();
  }
};

const renderProjects = () => {
  document.querySelectorAll('.folder').forEach(folder => folder.remove());

  data.getProjects().forEach(project => {
    createNavItem(project, 'fa-folder', 'nav-item', 'folder');
  });

  createNewFolderItem();
};

export { renderProjects };

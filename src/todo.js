import { formatDistance } from 'date-fns';
import { newElement } from './helper';

const main = document.querySelector('main');

const renderToDos = todos => {
  main.innerHTML = '';
  todos.forEach(todo => renderToDo(todo));
};

const renderToDo = todo => {
  const args = todo.done ? ['div', 'to-do', 'done'] : ['div', 'to-do'];
  const container = newElement(...args);

  const checkbox = newElement('div', 'checkbox');

  const text = newElement('div', 'text');
  text.textContent = todo.name;

  let imp, content;
  if (todo.important) {
    imp = 'important';
    content = 'important';
  } else {
    imp = 'not-important';
    content = '';
  }

  const important = newElement('div', imp);
  important.textContent = content;

  const due = newElement('div', 'due');
  due.textContent = todo.due ? formatDistance(new Date(), todo.due) : 'anytime';

  container.append(checkbox, text, important, due);
  main.append(container);
};

export { renderToDos };

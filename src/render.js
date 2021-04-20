import { formatDistance, isToday, isTomorrow } from 'date-fns';
import { newElement } from './helper';
import data from './data';

const main = document.querySelector('main');

const renderToDos = (todos, project = null) => {
  main.innerHTML = '';
  todos.forEach(todo => renderToDo(todo, todos));
  renderAddToDo(project);
};

const renderToDo = (todo, todos) => {
  const args = todo.done ? ['div', 'to-do', 'done'] : ['div', 'to-do'];
  const container = newElement(...args);

  container.addEventListener('click', event => {
    console.log('click!');
    data.toggleDone(todo.name);
    renderToDos(todos);
  });

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
  if (todo.due) {
    if (isToday(todo.due)) {
      due.textContent = 'today';
    } else {
      if (isTomorrow(todo.due)) {
        due.textContent = 'tomorrow';
      } else {
        due.textContent = formatDistance(new Date(), todo.due);
      }
    }
  } else {
    due.textContent = 'anytime';
  }

  container.append(checkbox, text, important, due);
  main.append(container);
};

const renderAddToDo = project => {
  const newTodo = newElement('div', 'to-do', 'new-to-do');
  const i = newElement('i', 'fas', 'fa-plus');
  const span = newElement('span');
  span.textContent = 'New Todo';

  newTodo.append(i, span);

  newTodo.addEventListener('click', event => {
    newTodo.remove();
    const container = newElement('div', 'to-do', 'new-to-do');
    const form = newElement('form', 'to-do-form');
    const name = newElement('input', 'name');
    const important = newElement('label');
    const box = newElement('input', 'important');
    box.setAttribute('type', 'checkbox');
    const span = newElement('span');
    span.textContent = 'Important?';
    important.append(box, span);
    const date = newElement('input', 'date');
    date.setAttribute('type', 'date');
    date.valueAsDate = new Date();
    const submit = newElement('button', 'submit');

    form.addEventListener('submit', e => {
      e.preventDefault();

      const todo = {
        name: name.value,
        desciption: '',
        due: new Date(date.value),
        important: box.checked,
        done: false,
      };

      data.createToDo(todo, project);
      if (project) {
        const todos = data.getProject(project);
        renderToDos(todos, project);
      } else {
        renderToDos(data.getToDos());
      }
    });

    form.append(name, important, date, submit);
    container.append(form);
    main.append(container);
    name.focus();
  });

  main.append(newTodo);
};

export { renderToDos };

import data from './data';
import { isToday, isThisWeek } from 'date-fns';
import { renderToDos } from './render';

const inbox = document.querySelector('#inbox');
const day = document.querySelector('#day');
const week = document.querySelector('#week');

inbox.addEventListener('click', event => {
  const todos = data.getToDos();
  renderToDos(todos);
});

day.addEventListener('click', event => {
  const todos = data.getToDos().filter(todo => isToday(todo.due));
  renderToDos(todos);
});

week.addEventListener('click', event => {
  const todos = data.getToDos().filter(todo => isThisWeek(todo.due));
  renderToDos(todos);
});

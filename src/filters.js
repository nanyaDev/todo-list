import data from './data';
import { renderToDos } from './todo';

const inbox = document.querySelector('#inbox');
const day = document.querySelector('#day');
const week = document.querySelector('#week');

inbox.addEventListener('click', event => {
  const todos = data.getToDos();
  renderToDos(todos);
});

day.addEventListener('click', event => {
  const todos = data.getToDos();
  renderToDos(todos);
});

week.addEventListener('click', event => {
  const todos = data.getToDos();
  renderToDos(todos);
});

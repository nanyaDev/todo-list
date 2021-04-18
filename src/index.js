import { renderProjects } from './project';
import { renderToDos } from './todo';
import data from './data';
import './filters';

renderProjects();

const todos = data.getToDos();
renderToDos(todos);

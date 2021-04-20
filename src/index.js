import { renderProjects } from './project';
import { renderToDos } from './render';
import data from './data';
import './filters';

renderProjects();

const todos = data.getToDos();
renderToDos(todos);

/*
IMO, the code could be better structured. The data structure used in data.js isn't natural and render.js needs access to what the current display context is e.g. if you click new todo on the groceries tab it should know that so it can add it to the correct folder.
*/

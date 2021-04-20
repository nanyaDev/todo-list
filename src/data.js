import { add } from 'date-fns';

const data = (() => {
  const projects = {
    Groceries: [
      {
        name: 'Flour',
        desciption: '',
        due: null,
        important: false,
        done: false,
      },
      {
        name: 'Eggs',
        desciption: '',
        due: null,
        important: false,
        done: true,
      },
      {
        name: 'Brown Sugar',
        desciption: '',
        due: null,
        important: false,
        done: true,
      },
    ],
    Misc: [
      {
        name: 'Follow up with Career Advisor',
        desciption: '',
        due: add(new Date(), { days: 2 }),
        important: true,
        done: false,
      },
    ],
  };

  const createToDo = (todo, project = null) => {
    if (project) {
      projects[project].push(todo);
    } else {
      projects['Misc'].push(todo);
    }

    console.log(projects);
  };

  const deleteToDo = () => {};

  const getProject = project => {
    return projects[project];
  };

  const getProjects = () => {
    return Object.keys(projects).filter(project => project !== 'Misc');
  };

  const getToDos = () => {
    return Object.values(projects).flat(1);
  };

  const newProject = project => {
    projects[project] = [];
  };

  const toggleImportance = name => {
    getToDos().find(todo => todo.name === name).important ^= true;
  };

  const toggleDone = name => {
    getToDos().find(todo => todo.name === name).done ^= true;
  };

  return {
    createToDo,
    deleteToDo,
    getProject,
    getProjects,
    getToDos,
    newProject,
    toggleImportance,
    toggleDone,
  };
})();

export default data;

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

  const getProjects = () => {
    return Object.keys(projects).filter(project => project !== 'Misc');
  };

  const getToDos = () => {
    return Object.values(projects).flat(1);
  };

  const newProject = project => {
    projects[project] = [];
  };

  const createToDo = () => {};
  const deleteToDo = () => {};

  return {
    getProjects,
    getToDos,
    newProject,
    createToDo,
    deleteToDo,
  };
})();

export default data;

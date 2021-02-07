import domListeners from './domListeners';
import deleteTask from './task/deleteTask';
import viewTask from './task/viewTask';
import completedTask from './task/completedTask';
import storage from './storage';
import createProject from './project/createProject';
import removeProject from './project/removeProject';
import filterTask from './project/filterTask';

const displayController = (() => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <main id="main">
    <div id="col-1">
      <div id="project-container">
        <div id="project-header">
          <h3>Projects</h3>
        </div>
        <div class="project-group">
          <h3 id="all-project">All</h3>
        </div>
        <div id="add-project-input-container">
          <input type="text" id="add-project-input" />
          <div class="task-buttons">
            <i class="fas fa-check"></i>
            <i class="fas fa-ban"></i>
          </div>
        </div>
        <div id="add-project">
          <p id="plus">&#x2B;</p>
          <p id="add-project-text">Add Project</p>
        </div>
      </div>
    </div>
    <div id="col-2">
      <div id="task-container">
        <div id="task-header">
          <p>Task</p>
          <p>Due Date</p>
        </div>
        <div id="add-task">
          <p id="plus">&#x2B;</p>
          <p id="add-task-text">Add Task</p>
        </div>
      </div>
    </div>
  </main>
  <div id="create-task-modal">
    <form action="#" id="create-task-form">
      <div id="create-task-group-1">
        <input type="text" placeholder="Add a task" required id="create-task-title" name="title"/>
        <textarea
          name="description"
          id="create-task-description"
          placeholder="Description"
        ></textarea>
      </div>
      <div id="create-task-group-2">
        <input type="date" id="create-task-date" name="date" required />
        <input type="text" id="create-task-project" />
      </div>
      <div id="create-task-group-3">
        <button id="cancel-button">Cancel</button>
        <input type="submit" id="submit-button" />
      </div>
    </form>
  </div>
  <div id="view-task-modal">
    <div id="view-task-container">
      <p id="view-task-title"></p>
      <p id="view-task-description"></p>
      <div id="view-task-date-project">
        <p id="view-due-date">Due Date:</p>
        <p id="view-project">Project:</p>
      </div>
      <div id="create-task-group-3">
        <button id="view-cancel-button">Cancel</button>
        <input type="submit" id="edit-button" value="Edit" />
      </div>
    </div>
  </div>
  `;

  const addProject = document.getElementById('add-project');
  const addTask = document.getElementById('add-task');
  const createTaskModal = document.getElementById('create-task-modal');
  const cancelButton = document.getElementById('cancel-button');
  const createTaskForm = document.getElementById('create-task-form');
  const createTaskTitle = document.getElementById('create-task-title').value;
  const createTaskDescription = document.getElementById(
    'create-task-description'
  ).value;
  const createTaskDate = document.getElementById('create-task-date').value;
  const createTaskProject = document.getElementById('create-task-project')
    .value;
  const addProjectInputContainer = document.getElementById(
    'add-project-input-container'
  );
  let myTasks = [];
  let myProjects = [];

  const loadTask = () => {
    for (let i = 0; i < myTasks.length; i++) {
      addTask.insertAdjacentHTML(
        'beforebegin',
        `
        <div class="task" data-id="${myTasks[i].id}">
          <div class="task-group">
            <input type="checkbox" class="checkbox" ${myTasks[i].checked}/>
            <p class="task-name">${myTasks[i].title}</p>
          </div>
          <div class="button-date-group">
            <div class="task-buttons">
              <div>
                <i class="far fa-edit"></i>
              </div>
              <div>
                <i class="far fa-trash-alt"></i>
              </div>
            </div>
            <p class="due-date">${myTasks[i].dueDate}</p>
          </div>
        </div>
      `
      );
    }
  };

  const loadProjects = () => {
    for (let i = 0; i < myProjects.length; i++) {
      addProjectInputContainer.insertAdjacentHTML(
        'beforebegin',
        `
        <div class="project-group" data-id="${myProjects[i].id}">
          <h3 class="project">${myProjects[i].title}</h3>
          <div class="task-buttons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt delete-project"></i>
          </div>
        </div>
        `
      );
    }
  };

  const projectHandler = () => {
    const project = document.querySelectorAll('.project');
    const allProject = document.getElementById('all-project');

    allProject.addEventListener('click', e => {
      const task = document.querySelectorAll('.task');
      for (let i = 0; i < task.length; i++) {
        task[i].remove();
      }

      loadTask();
    });

    for (let i = 0; i < project.length; i++) {
      project[i].addEventListener('click', filterTask);
    }
  };

  const addToProjectArr = project => {
    myProjects.push(project);
  };

  const removeProjectFromArr = projectId => {
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].id === projectId) {
        myProjects.splice(i, 1);
      }
    }
  };

  const projectTrashHandler = () => {
    const deleteProject = document.querySelectorAll('.delete-project');
    for (let i = 0; i < deleteProject.length; i++) {
      deleteProject[i].addEventListener('click', removeProject);
    }
  };

  const addToTaskArr = taskObj => {
    myTasks.push(taskObj);
  };

  const removeTaskFromArr = taskId => {
    for (let i = 0; i < myTasks.length; i++) {
      if (myTasks[i].id === taskId) {
        myTasks.splice(i, 1);
      }
    }
  };

  const trashHandler = () => {
    const trash = document.querySelectorAll('.fa-trash-alt');
    for (let i = 0; i < trash.length; i++) {
      trash[i].addEventListener('click', deleteTask);
    }
  };

  const viewTaskHandler = () => {
    const taskName = document.querySelectorAll('.task-name');
    for (let i = 0; i < taskName.length; i++) {
      taskName[i].addEventListener('click', viewTask);
    }
  };

  const checkHandler = () => {
    const checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener('click', e => {
        const target = e.target;
        const parent = target.parentElement.parentElement;
        const completed = target.checked ? 'checked' : false;
        const taskId = parent.getAttribute('data-id');

        for (let i = 0; i < myTasks.length; i++) {
          if (myTasks[i].id === taskId) {
            myTasks[i].checked = completed;
          }
        }
        storage.saveToLocal();
        completedTask();
      });
    }
  };

  // const addProjectHandler = () => {
  //   const addProject = document.getElementById('add-project');
  //   addProject.addEventListener('click', project);
  // };

  if (localStorage.getItem('myTasks')) {
    const getObj = JSON.parse(localStorage.getItem('myTasks'));
    myTasks = getObj;
    loadTask();
    trashHandler();
    viewTaskHandler();
    checkHandler();
    completedTask();
  }

  if (localStorage.getItem('myProjects')) {
    const getObj = JSON.parse(localStorage.getItem('myProjects'));
    myProjects = getObj;
    loadProjects();
    projectTrashHandler();
    projectHandler();
  }

  return {
    addProject,
    addTask,
    createTaskModal,
    cancelButton,
    createTaskForm,
    createTaskTitle,
    createTaskDescription,
    createTaskDate,
    createTaskProject,
    addToTaskArr,
    addToProjectArr,
    myTasks,
    myProjects,
    removeTaskFromArr,
    removeProjectFromArr,
    loadTask,
    trashHandler,
    viewTaskHandler,
    projectTrashHandler,
  };
})();

export default displayController;

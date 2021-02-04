import domListeners from './domListeners';
import deleteTask from './deleteTask';

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
          <h3 class="project">All</h3>
        </div>
        <div class="project-group">
          <h3 class="project">Coding</h3>
          <div class="task-buttons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
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
        <input type="date" id="create-task-date" required />
        <input type="text" id="create-task-project" />
      </div>
      <div id="create-task-group-3">
        <button id="cancel-button">Cancel</button>
        <input type="submit" id="submit-button" />
      </div>
    </form>
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
  let myTasks = [];

  const loadTask = () => {
    for (let i = 0; i < myTasks.length; i++) {
      addTask.insertAdjacentHTML(
        'beforebegin',
        `
        <div class="task" data-id="${myTasks[i].id}">
          <div class="task-group">
            <input type="checkbox" class="checkbox" />
            <p class="task-name">${myTasks[i].title}</p>
          </div>
          <div class="button-date-group">
            <div class="task-buttons">
              <i class="far fa-edit"></i>
              <i class="far fa-trash-alt"></i>
            </div>
            <p class="due-date">${myTasks[i].dueDate}</p>
          </div>
        </div>
      `
      );
    }
  };

  const addToTaskArr = taskObj => {
    myTasks.push(taskObj);
  };

  const removeTaskFromArr = taskObj => {
    for (let i = 0; i < myTasks.length; i++) {
      if (myTasks[i].id === taskObj) {
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
    const task = document.querySelectorAll('.task');
  };

  if (localStorage.getItem('myTasks')) {
    const getObj = JSON.parse(localStorage.getItem('myTasks'));
    myTasks = getObj;
    loadTask();
    trashHandler();
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
    myTasks,
    removeTaskFromArr,
    loadTask,
  };
})();

export default displayController;

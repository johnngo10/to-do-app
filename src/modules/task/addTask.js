import task from './task';
import displayController from '../displayController';
import storage from '../storage';

const addTask = e => {
  e.preventDefault();
  const createTaskTitle = document.getElementById('create-task-title').value;
  const createTaskDescription = document.getElementById(
    'create-task-description'
  ).value;
  const createTaskDate = document.getElementById('create-task-date').value;
  const createTaskProject = document.getElementById('create-task-project')
    .value;

  // Generate random ID
  function s4() {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  }
  const taskId = s4() + '-' + s4() + '-' + s4();

  // Create a new task object
  const newTask = task(
    taskId,
    createTaskTitle,
    createTaskDescription,
    createTaskDate,
    createTaskProject
  );

  displayController.addTask.insertAdjacentHTML(
    'beforebegin',
    `
    <div class="task" data-id="${newTask.id}">
      <div class="task-group">
        <input type="checkbox" class="checkbox" />
        <p class="task-name">${newTask.title}</p>
      </div>
      <div class="button-date-group">
        <div class="task-buttons">
          <i class="far fa-edit edit-task-button"></i>
          <i class="far fa-trash-alt"></i>
        </div>
        <p class="due-date">${newTask.dueDate}</p>
      </div>
    </div>
  `
  );

  displayController.addToTaskArr(newTask);
  displayController.trashHandler();
  displayController.viewTaskHandler();
  displayController.checkHandler();
  displayController.editTaskHandler();
  storage.saveToLocal();

  displayController.createTaskModal.style.display = 'none';
};

export default addTask;

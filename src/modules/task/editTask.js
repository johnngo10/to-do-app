import displayController from '../displayController';
const format = require('date-fns/format');

const editTask = e => {
  // e.preventDefault();
  const editTaskModal = document.getElementById('edit-task-modal');
  const editTaskTitle = document.getElementById('edit-task-title');
  const editTaskDescription = document.getElementById('edit-task-description');
  const editTaskDate = document.getElementById('edit-task-date');
  const editTaskProject = document.getElementById('edit-task-project');

  const target = e.target;
  const parent = target.parentElement.parentElement.parentElement.parentElement;
  const taskId = parent.getAttribute('data-id');
  const getObj = JSON.parse(localStorage.getItem('myTasks'));
  const taskObj = getObj.filter(e => e.id === taskId);

  const year = editTaskDate.value.slice(0, 4);
  const month = editTaskDate.value.slice(5, 7);
  const day = editTaskDate.value.slice(8);

  const date = format(new Date(year, month, day), 'MM-dd-yyyy');

  editTaskModal.style.display = 'flex';
  editTaskTitle.value = taskObj[0].title;
  editTaskDescription.value = taskObj[0].description;
  date = taskObj[0].dueDate;
  editTaskProject.value = taskObj[0].project;

  displayController.updateEditId(taskId);
};

export default editTask;

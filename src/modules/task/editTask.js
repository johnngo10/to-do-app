import displayController from '../displayController';

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

  editTaskModal.style.display = 'flex';
  editTaskTitle.value = taskObj[0].title;
  editTaskDescription.value = taskObj[0].description;
  editTaskDate.value = taskObj[0].dueDate;
  editTaskProject.value = taskObj[0].project;

  displayController.updateEditId(taskId);
};

export default editTask;

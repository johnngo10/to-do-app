import displayController from '../displayController';
import task from './task';
import storage from '../storage';

const editTask = e => {
  e.preventDefault();
  const content = document.getElementById('content');
  const editTaskModal = document.getElementById('edit-task-modal');
  const editTaskTitle = document.getElementById('edit-task-title');
  const editTaskDescription = document.getElementById('edit-task-description');
  const editTaskDate = document.getElementById('edit-task-date');
  const editTaskProject = document.getElementById('edit-task-project');
  const editTaskForm = document.getElementById('edit-task-form');
  const cancelEditButton = document.getElementById('cancel-edit-button');
  const submitEditButton = document.getElementById('submit-edit-button');

  const target = e.target;
  const parent = target.parentElement.parentElement.parentElement.parentElement;
  const taskId = parent.getAttribute('data-id');
  const taskObj = displayController.myTasks.filter(e => e.id === taskId);

  editTaskModal.style.display = 'flex';
  editTaskTitle.value = taskObj[0].title;
  editTaskDescription.value = taskObj[0].description;
  editTaskDate.value = taskObj[0].dueDate;
  editTaskProject.value = taskObj[0].project;

  cancelEditButton.addEventListener('click', e => {
    e.preventDefault();

    editTaskModal.style.display = 'none';
  });

  const submitEdit = () => {
    editTaskForm.addEventListener('submit', e => {
      const task = document.querySelector(`.task[data-id="taskId]`);
      console.log(task);

      e.preventDefault();

      displayController.editTaskInArr(
        taskId,
        editTaskTitle.value,
        editTaskDescription.value,
        editTaskDate.value,
        editTaskProject.value
      );
      storage.saveToLocal();

      editTaskModal.style.display = 'none';
    });
  };
};

export default editTask;

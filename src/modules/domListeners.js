import displayController from './displayController';
import addTask from './addTask';

const domListeners = () => {
  displayController.addTask.addEventListener('click', e => {
    displayController.createTaskModal.style.display = 'flex';
  });

  displayController.cancelButton.addEventListener('click', e => {
    displayController.createTaskModal.style.display = 'none';
  });

  displayController.createTaskForm.addEventListener('submit', addTask);
};

export default domListeners;

import loadPage from './loadPage';
import addTask from './addTask';

const domListeners = () => {
  loadPage.addTask.addEventListener('click', addTask);
};

export default domListeners;

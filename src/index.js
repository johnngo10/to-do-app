import displayController from './modules/displayController';
import domListeners from './modules/domListeners';
import addTask from './modules/task/addTask';

const init = (() => {
  domListeners();
})();

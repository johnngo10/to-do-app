import loadPage from './modules/loadPage';
import domListeners from './modules/domListeners';
import addTask from './modules/addTask';

const init = (() => {
  domListeners();
})();

// Task object function factory
// Project object with a list of associated task
// Create a module for all dom elements
// Create a module for adding new todos
// Create a module for setting todos as complete
// create a module for setting priority
// create a module for date

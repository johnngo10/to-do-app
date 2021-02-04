import displayController from './displayController';

const storage = (() => {
  const saveToLocal = () => {
    localStorage.setItem(`myTasks`, JSON.stringify(displayController.myTasks));
  };

  const deleteFromLocal = taskId => {
    localStorage.removeItem(`${taskId}`);
  };

  return { saveToLocal, deleteFromLocal };
})();

export default storage;

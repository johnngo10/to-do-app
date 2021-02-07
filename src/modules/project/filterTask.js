import displayController from '../displayController';

const filterTask = e => {
  const target = e.target.textContent.toLowerCase();
  const taskArr = displayController.myTasks;
  const task = document.querySelectorAll('.task');
  const addTask = document.getElementById('add-task');
  const filterArr = [];

  for (let i = 0; i < task.length; i++) {
    task[i].remove();
  }

  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].project.toLowerCase() === target) {
      filterArr.push(taskArr[i]);
    }
  }

  for (let i = 0; i < filterArr.length; i++) {
    addTask.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="task" data-id="${filterArr[i].id}">
        <div class="task-group">
          <input type="checkbox" class="checkbox" ${filterArr[i].checked}/>
          <p class="task-name">${filterArr[i].title}</p>
        </div>
        <div class="button-date-group">
          <div class="task-buttons">
            <div>
              <i class="far fa-edit"></i>
            </div>
            <div>
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
          <p class="due-date">${filterArr[i].dueDate}</p>
        </div>
      </div>
    `
    );
  }

  // console.log(filterArr);

  // console.log(displayController.myTasks);
};

export default filterTask;

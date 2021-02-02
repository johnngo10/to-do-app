const loadPage = (() => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <main id="main">
  <div id="col-1">
    <div id="project-container">
      <div id="project-header">
        <h3>Projects</h3>
      </div>
      <div class="project-group">
        <h3 class="project">All</h3>
      </div>
      <div class="project-group">
        <h3 class="project">Coding</h3>
        <div class="task-buttons">
          <i class="far fa-edit"></i>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
      <div id="add-project">
        <p id="plus">&#x2B;</p>
        <p id="add-project-text">Add Project</p>
      </div>
    </div>
  </div>
  <div id="col-2">
    <div id="task-container">
      <div id="task-header">
        <p>Task</p>
        <p>Due Date</p>
      </div>
      <div class="task">
        <div class="task-group">
          <input type="checkbox" class="checkbox" />
          <p class="task-name">Work on todo list app</p>
        </div>
        <div class="button-date-group">
          <div class="task-buttons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
          <p class="due-date">02/10/2020</p>
        </div>
      </div>
      <div id="add-task">
        <p id="plus">&#x2B;</p>
        <p id="add-task-text">Add Task</p>
      </div>
    </div>
  </div>
  `;

  const main = document.getElementById('main');
  const addProject = document.getElementById('add-project');
  const addTask = document.getElementById('add-task');
  return { addProject, addTask };
})();

export default loadPage;

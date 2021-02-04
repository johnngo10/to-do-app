function task(id, title, description, dueDate, priority, project) {
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
  };
}

// const task = (title, description, dueDate, priority, project) => {
//   this.title = title;
//   this.description = description;
//   this.dueDate = dueDate;
//   this.priority = priority;
//   this.project = project;

//   return { title, description, dueDate, priority, project };
// };

export default task;

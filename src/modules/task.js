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

export default task;

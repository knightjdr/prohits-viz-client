const filterTasksToDisplay = (id, tasks) => {
  if (id && tasks[id]) {
    return [
      { id, ...tasks[id] },
    ];
  } if (id) {
    return [];
  }
  return Object.entries(tasks).map(([taskID, status]) => ({
    id: taskID,
    ...status,
  }));
};

export default filterTasksToDisplay;

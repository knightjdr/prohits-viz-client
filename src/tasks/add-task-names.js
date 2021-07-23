const addTaskNames = (localTasks, confirmedTasks) => (
  Object.entries(confirmedTasks).reduce((accum, [id, taskData]) => ({
    ...accum,
    [id]: {
      ...taskData,
      name: localTasks[id]?.name || '',
    },
  }), {})
);

export default addTaskNames;

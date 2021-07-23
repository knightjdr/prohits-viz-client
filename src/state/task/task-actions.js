export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

export const changeTaskName = (id, name) => ({
  id,
  name,
  type: CHANGE_TASK_NAME,
});

export const createTask = (id, tool) => ({
  id,
  tool,
  type: CREATE_TASK,
});

export const updateTasks = (tasks) => ({
  tasks,
  type: UPDATE_TASKS,
});

export const updateTaskStatus = (id, status) => ({
  id,
  status,
  type: UPDATE_TASK_STATUS,
});

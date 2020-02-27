import { CREATE_TASK, UPDATE_TASKS, UPDATE_TASK_STATUS } from '../task/task-actions';
import { UPDATE_CONSENT } from '../cookies/cookie-actions';

// Actions to subscribe to.
export const saveActions = [
  UPDATE_CONSENT,

  CREATE_TASK,
  UPDATE_TASKS,
  UPDATE_TASK_STATUS,
];

export const saveActionKey = {
  UPDATE_CONSENT: 'cookies',

  CREATE_TASK: 'tasks',
  UPDATE_TASKS: 'tasks',
  UPDATE_TASK_STATUS: 'tasks',
};

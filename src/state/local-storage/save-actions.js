import * as taskActions from '../task/task-actions';
import { UPDATE_CONSENT } from '../cookies/cookie-actions';

// Actions to subscribe to.
export const saveActions = [
  UPDATE_CONSENT,

  taskActions.CHANGE_TASK_NAME,
  taskActions.CREATE_TASK,
  taskActions.UPDATE_TASKS,
  taskActions.UPDATE_TASK_STATUS,
];

export const saveActionKey = {
  UPDATE_CONSENT: 'cookies',

  CHANGE_TASK_NAME: 'tasks',
  CREATE_TASK: 'tasks',
  UPDATE_TASKS: 'tasks',
  UPDATE_TASK_STATUS: 'tasks',
};

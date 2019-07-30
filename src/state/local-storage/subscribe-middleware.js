import subsetObject from '../../utils/subset-object';

// Task actions
/* import {
  ADD_TASK,
  UPDATING_TASK_STATUS,
  UPDATE_ERROR,
  UPDATE_STATUS,
} from '../set/task-actions'; */

/* const saveActions = [
  ADD_TASK,
  UPDATING_TASK_STATUS,
  UPDATE_ERROR,
  UPDATE_STATUS,
]; */
const saveActions = [];
const saveKeys = ['tasks'];

const localStorageMiddleware = ({ getState }) => (
  next => (action) => {
    const result = next(action);
    if (saveActions.includes(result.type)) {
      const toSave = subsetObject(getState(), saveKeys);
      localStorage.setItem('reduxState', JSON.stringify(toSave));
    }
    return result;
  }
);

export default localStorageMiddleware;

import * as actions from './task-actions';

const defaultState = {};

const reduceAndChangeName = (state, action) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    name: action.name,
  },
});

const reduceAndCreate = (state, action) => {
  if (!state[action.id]) {
    return {
      ...state,
      [action.id]: { status: 'running' },
    };
  }
  return state;
};

const reduceAndUpdate = (state, action) => ({
  ...action.tasks,
});

const reduceAndUpdateStatus = (state, action) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    ...action.status,
  },
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.CHANGE_TASK_NAME:
      return reduceAndChangeName(state, action);
    case actions.CREATE_TASK:
      return reduceAndCreate(state, action);
    case actions.UPDATE_TASKS:
      return reduceAndUpdate(state, action);
    case actions.UPDATE_TASK_STATUS:
      return reduceAndUpdateStatus(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './task-actions';

const reduceAndCreate = (state, action) => ({
  ...state,
  [action.id]: { status: 'running' },
});

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.id]: {
    ...state[action.id],
    ...action.status,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CREATE_TASK:
      return reduceAndCreate(state, action);
    case actions.UPDATE_TASK_STATUS:
      return reduceAndUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

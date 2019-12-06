import * as actions from './save-actions';

export const defaultState = {
  name: '',
};

const reduceAndSetName = (state, action) => ({
  ...state,
  name: action.name,
});

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case actions.SET_SESSION_NAME:
      return reduceAndSetName(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './utilities-actions';

export const defaultState = {
  utility: '',
};

const reduceAndSetField = (state, action) => ({
  ...state,
  [action.field]: action.value,
});

const reduceAndSetFile = (state, action) => ({
  ...state,
  files: action.files,
});

const reduceAndSetType = (state, action) => ({
  ...defaultState,
  files: state.files,
  utility: action.utility,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_UTILITY_FIELD:
      return reduceAndSetField(state, action);
    case actions.SET_UTILITY_FILE:
      return reduceAndSetFile(state, action);
    case actions.SET_UTILITY_TYPE:
      return reduceAndSetType(state, action);
    default:
      return state;
  }
};

export default reducer;

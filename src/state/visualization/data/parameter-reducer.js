import * as fileActions from './interactive-file-actions';

export const defaultState = {
  filename: '',
  id: '',
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return { ...defaultState };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.parameters;
    default:
      return state;
  }
};

export default reducer;

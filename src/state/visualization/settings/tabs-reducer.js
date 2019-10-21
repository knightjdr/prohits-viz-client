import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  active: 'main',
  available: ['main'],
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return { ...defaultState };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.tabs || { ...defaultState };
    default:
      return state;
  }
};

export default reducer;

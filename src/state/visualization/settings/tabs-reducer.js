import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  active: 'main',
  available: ['main'],
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return { ...defaultState };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.tabs || { ...defaultState };
    default:
      return state;
  }
};

export default reducer;

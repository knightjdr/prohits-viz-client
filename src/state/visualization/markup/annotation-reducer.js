import * as fileActions from '../data/interactive-file-actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.annotations
        ? action.file.annotations
        : {};
    default:
      return state;
  }
};

export default reducer;

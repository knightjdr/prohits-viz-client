import * as fileActions from './interactive-file-actions';


const reducer = (state = [], action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return [];
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.rowDB || [];
    default:
      return state;
  }
};

export default reducer;

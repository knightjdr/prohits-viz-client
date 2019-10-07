import * as fileActions from './interactive-file-actions';


const reducer = (state = [], action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return [];
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.columnDB || [];
    default:
      return state;
  }
};

export default reducer;

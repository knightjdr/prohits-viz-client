import * as fileActions from './interactive-file-actions';

const reduceAndLoad = action => (
  action.file.columnDB || []
);

const reducer = (state = [], action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return [];
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(action);
    default:
      return state;
  }
};

export default reducer;

import * as fileActions from './interactive-file-actions';

export const defaultState = {
  direction: null,
  id: null,
  list: [],
  order: [],
  sortBy: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        direction: null,
        id: null,
        list: [],
        order: [],
        sortBy: null,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.rows
        ? action.file.rows
        : {
          direction: null,
          id: null,
          list: [],
          order: [],
          sortBy: null,
        };
    default:
      return state;
  }
};

export default reducer;

import * as actions from './rows-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  direction: null,
  list: [],
  order: [],
  sortBy: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        direction: null,
        list: [],
        order: [],
        sortBy: null,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.rows
        ? action.file.rows
        : {
          direction: null,
          list: [],
          order: [],
          sortBy: null,
        };
    case actions.RESTORE_ROWS:
      return {
        ...state,
        direction: action.direction,
        list: action.list,
        sortBy: action.sortBy,
      };
    case actions.UPDATE_ROWS:
      return {
        ...state,
        direction: action.direction,
        list: action.list,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default reducer;

import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  list: [],
  order: [],
  sortBy: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        defaultOrder: [],
        direction: null,
        list: [],
        order: [],
        sortBy: null,
      };
    case actions.FILTER_ROWS:
      return {
        ...state,
        order: action.order,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.rows
        ? action.file.rows
        : {
          defaultOrder: [],
          direction: null,
          list: [],
          order: [],
          sortBy: null,
        };
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        direction: null,
        order: [...state.defaultOrder],
        sortBy: null,
      };
    case actions.SORT_ROWS:
      return {
        ...state,
        direction: action.direction,
        order: action.order,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default reducer;

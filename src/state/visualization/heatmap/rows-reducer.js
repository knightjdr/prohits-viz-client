import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  filterOrder: [],
  order: [],
  sortBy: '',
  sortOrder: [],
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case actions.SET_ROW_FILTER_ORDER:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          filterOrder: [...action.order],
          order: [...action.order],
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.rows
        ? action.file.rows
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          direction: null,
          filterOrder: [],
          order: [...state[action.selectionID].defaultOrder],
          sortBy: '',
          sortOrder: [],
        },
      };
    case actions.SORT_ROWS:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          direction: action.direction,
          order: [...action.order],
          sortBy: action.sortBy,
          sortOrder: [...action.order],
        },
      };
    default:
      return state;
  }
};

export default reducer;

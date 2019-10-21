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
    case actions.FILTER_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          filterOrder: [...action.rowOrder],
          order: [...action.rowOrder],
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.rows
        ? action.file.rows
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          direction: null,
          filterOrder: [],
          order: [...state[action.dataID].defaultOrder],
          sortBy: '',
          sortOrder: [],
        },
      };
    case actions.SORT_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
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

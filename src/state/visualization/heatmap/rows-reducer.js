import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  order: [],
  sortBy: null,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {};
    case actions.FILTER_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          order: action.order,
        },
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.rows
        ? action.file.rows
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          direction: null,
          order: [...state[action.dataID].defaultOrder],
          sortBy: null,
        },
      };
    case actions.SORT_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          direction: action.direction,
          order: action.order,
          sortBy: action.sortBy,
        },
      };
    default:
      return state;
  }
};

export default reducer;
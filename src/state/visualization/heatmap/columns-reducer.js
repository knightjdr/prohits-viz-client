import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

export const defaultState = {
  defaultOrder: [],
  order: [],
  ref: null,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {};
    case rowActions.FILTER_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          order: [...action.columnOrder],
        },
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.columns
        ? action.file.columns
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          order: [...state[action.dataID].defaultOrder],
        },
      };
    case actions.SET_COLUMN_REFERENCE:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          ref: action.ref,
        },
      };
    default:
      return state;
  }
};

export default reducer;

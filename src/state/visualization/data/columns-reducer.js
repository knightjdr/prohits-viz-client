import { SET_COLUMN_REFERENCE } from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  defaultOrder: [],
  names: [],
  order: [],
  ref: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        defaultOrder: [],
        names: [],
        order: [],
        ref: null,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.columns
        ? action.file.columns
        : {
          defaultOrder: [],
          names: [],
          order: [],
          ref: null,
        };
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        order: [...state.defaultOrder],
      };
    case SET_COLUMN_REFERENCE:
      return {
        ...state,
        ref: action.ref,
      };
    default:
      return state;
  }
};

export default reducer;

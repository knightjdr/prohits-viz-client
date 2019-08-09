import { SET_COLUMN_REFERENCE } from './columns-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  names: [],
  ref: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        names: [],
        ref: null,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.columns
        ? action.file.columns
        : {
          names: [],
          ref: null,
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

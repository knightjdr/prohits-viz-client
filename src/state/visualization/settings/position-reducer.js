import * as fileActions from '../data/interactive-file-actions';

import { UPDATE_POSITION } from './position-actions';

export const defaultState = {
  x: 0,
  y: 0,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {};
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.position
        ? action.file.position
        : {};
    case UPDATE_POSITION:
      return {
        ...state,
        [action.dataID]: {
          x: action.x,
          y: action.y,
        },
      };
    default:
      return state;
  }
};

export default reducer;

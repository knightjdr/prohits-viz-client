import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';

import { UPDATE_POSITION } from './position-actions';

export const defaultState = {
  x: 0,
  y: 0,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case rowActions.FILTER_ROWS:
      return {
        ...state,
        [action.dataID]: {
          x: 0,
          y: 0,
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.position
        ? action.file.position
        : {};
    case rowActions.SORT_ROWS:
      return {
        ...state,
        [action.dataID]: {
          x: 0,
          y: 0,
        },
      };
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

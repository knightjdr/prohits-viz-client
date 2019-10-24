import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';
import * as searchActions from '../markup/search-actions';

import { UPDATE_POSITION } from './position-actions';

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.selectionID]: {
    x: action.x,
    y: action.y,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case rowActions.FILTER_ROWS:
      return {
        ...state,
        [action.selectionID]: {
          x: 0,
          y: 0,
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.position
        ? action.file.position
        : {};
    case searchActions.SET_SEARCH_STATUS:
      return reduceAndUpdate(state, action);
    case rowActions.SORT_ROWS:
      return {
        ...state,
        [action.selectionID]: {
          x: 0,
          y: 0,
        },
      };
    case UPDATE_POSITION:
      return reduceAndUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

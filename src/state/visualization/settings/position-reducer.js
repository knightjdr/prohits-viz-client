import * as actions from './position-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';
import * as searchActions from '../markup/search-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndSort = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    x: 0,
    y: 0,
  },
});

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    x: action.x,
    y: action.y,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'position');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'position');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case searchActions.SET_SEARCH_STATUS_HEATMAP:
      return reduceAndUpdate(state, action);
    case rowActions.SORT_ROWS:
      return reduceAndSort(state, action);
    case actions.UPDATE_POSITION:
      return reduceAndUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

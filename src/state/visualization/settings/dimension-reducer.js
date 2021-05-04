import * as actions from './dimension-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as searchActions from '../markup/search-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndSetDimensions = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...action.dimensions,
  },
});

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.dimension]: action.value,
  },
});

const reduceAndUpdateMultiple = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    ...action.dimensions,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'dimensions');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'dimensions');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case searchActions.SET_SEARCH_STATUS_HEATMAP:
      return reduceAndUpdateMultiple(state, action);
    case actions.SET_DIMENSIONS:
      return reduceAndSetDimensions(state, action);
    case actions.UPDATE_DIMENSION:
      return reduceAndUpdate(state, action);
    case actions.UPDATE_DIMENSIONS:
      return reduceAndUpdateMultiple(state, action);
    default:
      return state;
  }
};
export default reducer;

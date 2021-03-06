import * as actions from './search-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    columns: {},
    labels: {},
    match: false,
    rows: {},
    term: '',
  },
});

const reduceAndsetSearchStatus = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    columns: action.results.columns,
    labels: action.results.labels,
    match: action.results.match,
    rows: action.results.rows,
    term: action.term,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'searchStatus');
    case displayActions.CHANGE_CIRCHEATMAP_PLOT:
      return reduceAndClear(state, action);
    case displayActions.CHANGE_SCATTER_PLOT:
      return reduceAndClear(state, action);
    case actions.CLEAR_SEARCH:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'searchStatus');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.SET_SEARCH_STATUS_HEATMAP:
      return reduceAndsetSearchStatus(state, action);
    case actions.SET_SEARCH_STATUS_SCATTER:
      return reduceAndsetSearchStatus(state, action);
    default:
      return state;
  }
};

export default reducer;

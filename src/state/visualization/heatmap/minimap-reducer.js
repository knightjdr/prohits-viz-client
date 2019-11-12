import * as actions from './minimap-actions';
import * as columnActions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndCompleteSync = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    image: state[action.snapshotID].updateOriginal ? action.syncedImage : state[action.snapshotID].image,
    isSyncing: false,
    needSyncing: false,
    syncError: false,
    syncedImage: state[action.snapshotID].updateOriginal ? null : action.syncedImage,
    updateOriginal: false,
  },
});

const reduceAndError = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    isSyncing: false,
    syncError: true,
    syncedImage: null,
    updateOriginal: false,
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    isSyncing: false,
    needSyncing: false,
    syncError: false,
    syncedImage: null,
    updateOriginal: false,
  },
});

const reduceAndSyncronize = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    isSyncing: true,
    syncError: false,
    syncedImage: null,
    updateOriginal: action.updateOriginal,
  },
});

const reduceAndUpdateStatus = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    isSyncing: false,
    needSyncing: true,
    syncedImage: null,
    updateOriginal: false,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'minimap');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.MINIMAP_SYNCHED:
      return reduceAndCompleteSync(state, action);
    case actions.MINIMAP_SYNCHRONIZING:
      return reduceAndSyncronize(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'minimap');
    case snapshotActions.REMOVE_HEATMAP_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_IMAGE:
      return reduceAndReset(state, action);
    case actions.SYNC_ERROR:
      return reduceAndError(state, action);
    case columnActions.SET_COLUMN_ORDER:
      return reduceAndUpdateStatus(state, action);
    case rowActions.SET_ROW_ORDER:
      return reduceAndUpdateStatus(state, action);
    case rowActions.SORT_ROWS:
      return reduceAndUpdateStatus(state, action);
    default:
      return state;
  }
};

export default reducer;

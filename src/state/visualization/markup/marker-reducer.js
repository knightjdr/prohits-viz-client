import * as actions from './marker-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAddMarker = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: {
      ...state[action.snapshotID].list,
      [action.id]: {
        ...action.dimensions,
      },
    },
  },
});

const reduceAndClearMarkers = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: {},
  },
});

const reduceAndUpdateSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.setting]: action.value,
  },
});

const reduceAndUpdateList = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: action.list,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'markers');
    case actions.ADD_MARKER:
      return reduceAndAddMarker(state, action);
    case actions.CHANGE_MARKER_SETTING:
      return reduceAndUpdateSetting(state, action);
    case actions.CLEAR_ALL_MARKERS:
      return reduceAndClearMarkers(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'markers');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.UPDATE_MARKERS:
      return reduceAndUpdateList(state, action);
    default:
      return state;
  }
};

export default reducer;

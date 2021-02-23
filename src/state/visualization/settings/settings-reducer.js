import * as actions from './settings-actions';
import * as displayActions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    current: {
      ...state[action.snapshotID].default,
    },
  },
});

const reduceAndUpdateSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    current: {
      ...state[action.snapshotID].current,
      [action.setting]: action.value,
    },
  },
});

const reduceAndUpdateSettings = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    current: {
      ...state[action.snapshotID].current,
      ...action.settings,
    },
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'settings');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'settings');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_CIRCHEATMAP:
      return reduceAndReset(state, action);
    case displayActions.RESET_HEATMAP:
      return reduceAndReset(state, action);
    case displayActions.RESET_SCATTER:
      return reduceAndReset(state, action);
    case actions.UPDATE_SETTING:
      return reduceAndUpdateSetting(state, action);
    case actions.UPDATE_SETTINGS:
      return reduceAndUpdateSettings(state, action);
    default:
      return state;
  }
};

export default reducer;

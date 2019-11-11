import * as actions from './settings-actions';
import * as displayActions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.settings,
});

const reduceAndLoad = action => (
  action.file.settings ? action.file.settings : {}
);

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
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(action);
    case displayActions.RESET_IMAGE:
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

import * as actions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import deepCopy from '../../../utils/deep-copy';
import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAdd = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    points: {
      ...state[action.snapshotID].points,
      ...action.points,
    },
  },
});

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    points: {},
  },
});

const reduceAndDelete = (state, action) => {
  const updatedList = deepCopy(state[action.snapshotID].points);
  delete updatedList[action.label];
  return {
    ...state,
    [action.snapshotID]: {
      ...state[action.snapshotID],
      points: updatedList,
    },
  };
};

const reduceAndUpdatePoint = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    points: {
      ...state[action.snapshotID].points,
      [action.label]: { ...action.parameters },
    },
  },
});

const reduceAndUpdateSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.setting]: action.value,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_POINTS:
      return reduceAndAdd(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'customization');
    case displayActions.CHANGE_PLOT:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.DELETE_ALL_POINTS:
      return reduceAndClear(state, action);
    case actions.DELETE_POINT:
      return reduceAndDelete(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'customization');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.UPDATE_POINT:
      return reduceAndUpdatePoint(state, action);
    case actions.UPDATE_CUSTOMIZATION_SETTING:
      return reduceAndUpdateSetting(state, action);
    default:
      return state;
  }
};

export default reducer;

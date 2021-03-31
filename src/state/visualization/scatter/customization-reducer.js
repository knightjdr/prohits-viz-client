import * as actions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAdd = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: action.groups,
    id: action.nextGroupID,
  },
});

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: [],
    id: 1,
  },
});

const reduceAndDeleteGroup = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: state[action.snapshotID].groups.filter((group, index) => index !== action.groupIndex),
  },
});

const reduceAndDeletePoint = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: state[action.snapshotID].groups.map((group, index) => {
      if (index === action.groupIndex) {
        return {
          ...group,
          points: group.points.filter((point) => point !== action.label),
        };
      }
      return group;
    }),
  },
});

const reduceAndUpdateGroups = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: action.groups,
  },
});

const reduceAndUpdateGroupSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    groups: state[action.snapshotID].groups.map((group, index) => {
      if (index === action.groupIndex) {
        return {
          ...group,
          [action.setting]: action.value,
        };
      }
      return group;
    }),
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
    case actions.ADD_GROUP:
      return reduceAndAdd(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'customization');
    case displayActions.CHANGE_SCATTER_PLOT:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.DELETE_ALL_GROUPS:
      return reduceAndClear(state, action);
    case actions.DELETE_GROUP:
      return reduceAndDeleteGroup(state, action);
    case actions.DELETE_POINT:
      return reduceAndDeletePoint(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'customization');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.UPDATE_CUSTOMIZATION_SETTING:
      return reduceAndUpdateSetting(state, action);
    case actions.UPDATE_GROUPS:
      return reduceAndUpdateGroups(state, action);
    case actions.UPDATE_GROUP_SETTING:
      return reduceAndUpdateGroupSetting(state, action);
    default:
      return state;
  }
};

export default reducer;

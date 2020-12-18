import * as actions from './annotation-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAdd = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: {
      ...state[action.snapshotID].list,
      [action.id]: {
        position: { ...action.position },
        text: action.text,
      },
    },
  },
});

const reduceAndChangeSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.setting]: action.value,
  },
});

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: {},
  },
});

const reduceAndToggle = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    show: action.show,
  },
});

const reduceAndUpdateAll = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: action.list,
  },
});

const reduceAndUpdatePosition = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    list: {
      ...state[action.snapshotID].list,
      [action.id]: {
        ...state[action.snapshotID].list[[action.id]],
        position: { ...action.position },
      },
    },
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_ANNOTATION:
      return reduceAndAdd(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'annotations');
    case actions.CHANGE_ANNOTATION_SETTING:
      return reduceAndChangeSetting(state, action);
    case actions.CLEAR_ALL_ANNOTATIONS:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'annotations');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.TOGGLE_ANNOTATIONS:
      return reduceAndToggle(state, action);
    case actions.UPDATE_ANNOTATION_POSITION:
      return reduceAndUpdatePosition(state, action);
    case actions.UPDATE_ANNOTATIONS:
      return reduceAndUpdateAll(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './label-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    showAll: false,
    status: {},
  },
});

const reduceAndToggle = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    showAll: !state[action.snapshotID].showAll,
    status: {
      ...action.status,
    },
  },
});

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    status: {
      ...state[action.snapshotID].status,
      [action.label]: !state[action.snapshotID].status[action.label],
    },
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'labels');
    case displayActions.CHANGE_CIRCHEATMAP_PLOT:
      return reduceAndClear(state, action);
    case displayActions.CHANGE_SCATTER_PLOT:
      return reduceAndClear(state, action);
    case actions.CLEAR_LABELS:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'labels');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.TOGGLE_LABELS:
      return reduceAndToggle(state, action);
    case actions.UPDATE_LABEL:
      return reduceAndUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndDelete = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    deleted: [...state[action.snapshotID].deleted, action.index],
    order: action.order,
  },
});

const reduceAndOrder = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    order: action.order,
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    deleted: [],
    order: [...state[action.snapshotID].defaultOrder],
  },
});

const reduceAndSetRef = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    ref: action.ref,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'columns');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.DELETE_COLUMN:
      return reduceAndDelete(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'columns');
    case snapshotActions.REMOVE_HEATMAP_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_IMAGE:
      return reduceAndReset(state, action);
    case actions.SET_COLUMN_ORDER:
      return reduceAndOrder(state, action);
    case actions.SET_COLUMN_REFERENCE:
      return reduceAndSetRef(state, action);
    default:
      return state;
  }
};

export default reducer;

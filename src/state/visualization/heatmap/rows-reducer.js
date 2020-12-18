import * as actions from './rows-actions';
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
    order: [...action.order],
    sortBy: '',
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    direction: null,
    deleted: [],
    order: [...state[action.snapshotID].defaultOrder],
    sortBy: '',
  },
});

const reduceAndSort = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    direction: action.direction,
    order: [...action.order],
    sortBy: action.sortBy,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'rows');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.DELETE_ROW:
      return reduceAndDelete(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'rows');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_HEATMAP:
      return reduceAndReset(state, action);
    case actions.SET_ROW_ORDER:
      return reduceAndOrder(state, action);
    case actions.SORT_ROWS:
      return reduceAndSort(state, action);
    default:
      return state;
  }
};

export default reducer;

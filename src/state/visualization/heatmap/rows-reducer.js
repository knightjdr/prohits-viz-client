import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.rows,
});

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

const reduceAndLoadState = file => (
  file.rows ? file.rows : {}
);

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
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case actions.DELETE_ROW:
      return reduceAndDelete(state, action);
    case actions.SET_ROW_ORDER:
      return reduceAndOrder(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action.file);
    case displayActions.RESET_IMAGE:
      return reduceAndReset(state, action);
    case actions.SORT_ROWS:
      return reduceAndSort(state, action);
    default:
      return state;
  }
};

export default reducer;

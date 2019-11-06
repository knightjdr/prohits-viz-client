import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAndDelete = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    deleted: [...state[action.selectionID].deleted, action.index],
    order: action.order,
  },
});

const reduceAndOrder = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    order: [...action.order],
    sortBy: '',
  },
});

const reduceAndLoadState = file => (
  file.rows ? file.rows : {}
);

const reduceAndReset = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    direction: null,
    deleted: [],
    order: [...state[action.selectionID].defaultOrder],
    sortBy: '',
  },
});

const reduceAndSort = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    direction: action.direction,
    order: [...action.order],
    sortBy: action.sortBy,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
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

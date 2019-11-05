import * as actions from './columns-actions';
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
    order: action.order,
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    deleted: [],
    order: [...state[action.selectionID].defaultOrder],
  },
});

const reduceAndLoadState = file => (
  file.columns ? file.columns : {}
);

const reduceAndSetRef = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    ref: action.ref,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case actions.DELETE_COLUMN:
      return reduceAndDelete(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action.file);
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

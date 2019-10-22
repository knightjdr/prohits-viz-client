import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

const reduceForResetting = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    filterOrder: [],
    order: [...state[action.selectionID].defaultOrder],
    sortOrder: [],
  },
});

const reduceForRowFiltering = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    filterOrder: [...action.columnOrder],
    order: [...action.columnOrder],
  },
});

const reduceInteractiveState = file => (
  file.columns ? file.columns : {}
);

const reduceRef = (state, action) => ({
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
    case rowActions.FILTER_ROWS:
      return reduceForRowFiltering(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceInteractiveState(action.file);
    case displayActions.RESET_IMAGE:
      return reduceForResetting(state, action);
    case actions.SET_COLUMN_REFERENCE:
      return reduceRef(state, action);
    default:
      return state;
  }
};

export default reducer;

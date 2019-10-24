import * as actions from './search-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAndClear = (state, action) => ({
  ...state,
  [action.selectionID]: {
    columns: {},
    match: false,
    rows: {},
    term: '',
  },
});

const reduceAndSetSearchStatus = (state, action) => ({
  ...state,
  [action.selectionID]: {
    columns: action.results.columns,
    match: action.results.match,
    rows: action.results.rows,
    term: action.term,
  },
});

const reduceInteractiveState = file => (
  file.searchStatus ? file.searchStatus : {}
);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CLEAR_SEARCH:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceInteractiveState(action.file);
    case actions.SET_SEARCH_STATUS:
      return reduceAndSetSearchStatus(state, action);
    default:
      return state;
  }
};

export default reducer;

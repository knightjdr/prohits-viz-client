import * as actions from './search-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.searchStatus,
});

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    columns: {},
    match: false,
    rows: {},
    term: '',
  },
});

const reduceAndSetSearchStatus = (state, action) => ({
  ...state,
  [action.snapshotID]: {
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
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
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

import * as actions from './position-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';
import * as searchActions from '../markup/search-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.position,
});

const reduceAndLoad = (state, action) => (
  action.file.position ? action.file.position : {}
);

const reduceAndSort = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    x: 0,
    y: 0,
  },
});

const reduceAndUpdate = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    x: action.x,
    y: action.y,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(state, action);
    case searchActions.SET_SEARCH_STATUS:
      return reduceAndUpdate(state, action);
    case rowActions.SORT_ROWS:
      return reduceAndSort(state, action);
    case actions.UPDATE_POSITION:
      return reduceAndUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

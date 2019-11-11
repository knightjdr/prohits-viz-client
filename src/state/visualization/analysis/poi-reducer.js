import * as actions from './poi-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.poi,
});

const reduceAndUpdatePOI = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    ...action.poi,
  },
});

const reduceAndLoadState = file => (
  file.poi ? file.poi : {}
);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action.file);
    case actions.UPDATE_POI:
      return reduceAndUpdatePOI(state, action);
    default:
      return state;
  }
};

export default reducer;

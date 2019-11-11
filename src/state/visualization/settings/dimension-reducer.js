import * as actions from './dimension-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddSnapshot = (state, action) => ({
  ...state,
  [action.name]: action.dimensions,
});

const reduceAndLoad = action => (
  action.file.dimensions || {}
);

const reduceAndSetDimeneions = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...action.dimensions,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddSnapshot(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(action);
    case actions.SET_DIMENSIONS:
      return reduceAndSetDimeneions(state, action);
    default:
      return state;
  }
};
export default reducer;

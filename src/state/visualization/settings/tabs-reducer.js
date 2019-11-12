import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const reduceAndAddHeatmapSnapshot = (state, action) => ({
  ...state,
  active: action.name,
  activeSnapshot: action.name,
  availableSnapshots: [...state.availableSnapshots, action.name],
  snapshotID: action.id,
  tabType: 'snapshot',
});

const reduceAndLoad = action => (
  action.file.tabs || {}
);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddHeatmapSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(action);
    default:
      return state;
  }
};

export default reducer;

import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAddHeatmapSnapshot = (state, action) => ({
  ...state,
  active: action.name,
  activeSnapshot: action.name,
  availableSnapshots: [...state.availableSnapshots, action.name],
  snapshotID: action.id,
  tabType: 'snapshot',
});

const reduceAndRemoveHeatmapSnapshot = (state, action) => ({
  ...state,
  active: action.name !== state.active ? state.active : state.availableSnapshots[0],
  activeSnapshot: action.name !== state.activeSnapshot ? state.activeSnapshot : state.availableSnapshots[0],
  availableSnapshots: state.availableSnapshots.filter(snapshot => snapshot !== action.name),
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddHeatmapSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'tabs');
    case snapshotActions.REMOVE_HEATMAP_SNAPSHOT:
      return reduceAndRemoveHeatmapSnapshot(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './tabs-actions';
import * as analysisActions from '../analysis/analysis-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAddAnalysis = (state, action) => ({
  ...state,
  active: action.name,
  analysisID: action.id,
  availableAnalyses: [...state.availableAnalyses, action.name],
  tabType: 'analysis',
});

const reduceAndAddHeatmapSnapshot = (state, action) => ({
  ...state,
  active: action.name,
  activeSnapshot: action.name,
  availableSnapshots: [...state.availableSnapshots, action.name],
  snapshotID: action.id,
  tabType: 'snapshot',
});

const reduceAndChangeAnalysis = (state, action) => ({
  ...state,
  active: action.name,
  tabType: 'analysis',
});

const reduceAndChangeSnapshot = (state, action) => ({
  ...state,
  active: action.name,
  activeSnapshot: action.name,
  tabType: 'snapshot',
});

const reduceAndRemoveAnalysis = (state, action) => ({
  ...state,
  active: action.name !== state.active ? state.active : state.availableSnapshots[0],
  availableAnalyses: state.availableAnalyses.filter((analysis) => analysis !== action.name),
  tabType: action.name !== state.active ? state.tabType : 'snapshot',
});

const reduceAndRemoveHeatmapSnapshot = (state, action) => ({
  ...state,
  active: action.name !== state.active ? state.active : state.availableSnapshots[0],
  activeSnapshot: action.name !== state.activeSnapshot ? state.activeSnapshot : state.availableSnapshots[0],
  availableSnapshots: state.availableSnapshots.filter((snapshot) => snapshot !== action.name),
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case analysisActions.ADD_ANALYSIS:
      return reduceAndAddAnalysis(state, action);
    case snapshotActions.ADD_HEATMAP_SNAPSHOT:
      return reduceAndAddHeatmapSnapshot(state, action);
    case actions.CHANGE_ACTIVE_ANALYSIS:
      return reduceAndChangeAnalysis(state, action);
    case actions.CHANGE_ACTIVE_SNAPSHOT:
      return reduceAndChangeSnapshot(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'tabs');
    case analysisActions.REMOVE_ANALYSIS:
      return reduceAndRemoveAnalysis(state, action);
    case snapshotActions.REMOVE_HEATMAP_SNAPSHOT:
      return reduceAndRemoveHeatmapSnapshot(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actions from './analysis-actions';
import * as fileActions from '../data/interactive-file-actions';

import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndAddAnalysis = (state, action) => ({
  ...state,
  [action.name]: action.analysis,
});

const reduceAndRemoveAnalysis = (state, action) => (
  Object.entries(state).reduce((accum, [analysisName, analysisState]) => (
    analysisName !== action.name ? { ...accum, [analysisName]: analysisState } : accum
  ), {})
);

const reduceAndUpdateAnalysis = (state, action) => ({
  ...state,
  [action.name]: {
    ...state[action.name],
    ...action.analysis,
  },
});

const reduceAndUpdateAnalysisField = (state, action) => ({
  ...state,
  [action.name]: action.value,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_ANALYSIS:
      return reduceAndAddAnalysis(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'analysis');
    case actions.REMOVE_ANALYSIS:
      return reduceAndRemoveAnalysis(state, action);
    case actions.UPDATE_ANALYSIS:
      return reduceAndUpdateAnalysis(state, action);
    case actions.UPDATE_ANALYSIS_FIELD:
      return reduceAndUpdateAnalysisField(state, action);
    default:
      return state;
  }
};

export default reducer;

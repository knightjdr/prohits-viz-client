export const ADD_ANALYSIS = 'ADD_ANALYSIS';
export const REMOVE_ANALYSIS = 'REMOVE_ANALYSIS';
export const UPDATE_ANALYSIS = 'UPDATE_ANALYSIS';
export const UPDATE_ANALYSIS_FIELD = 'UPDATE_ANALYSIS_FIELD';

export const addAnalysis = (id, name, analysis) => ({
  analysis,
  id,
  name,
  type: ADD_ANALYSIS,
});

export const removeAnalysis = (name) => ({
  name,
  type: REMOVE_ANALYSIS,
});

export const updateAnalysis = (name, analysis) => ({
  analysis,
  name,
  type: UPDATE_ANALYSIS,
});

export const updateAnalysisField = (name, value) => ({
  name,
  type: UPDATE_ANALYSIS_FIELD,
  value,
});

export const CHANGE_ACTIVE_ANALYSIS = 'CHANGE_ACTIVE_ANALYSIS';
export const CHANGE_ACTIVE_SNAPSHOT = 'CHANGE_ACTIVE_SNAPSHOT';

export const changeActiveAnalysis = (name) => ({
  name,
  type: CHANGE_ACTIVE_ANALYSIS,
});

export const changeActiveSnapshot = (name) => ({
  name,
  type: CHANGE_ACTIVE_SNAPSHOT,
});

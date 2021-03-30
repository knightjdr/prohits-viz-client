import * as actions from './analysis-actions';

describe('Analysis actions', () => {
  it('should dispatch an action to add an analysis instance', () => {
    const newAnalysis = { processing: true };
    const expectedAction = {
      analysis: newAnalysis,
      id: 2,
      name: 'gprofiler-2',
      type: actions.ADD_ANALYSIS,
    };
    expect(actions.addAnalysis(2, 'gprofiler-2', newAnalysis)).toEqual(expectedAction);
  });

  it('should dispatch an action to remove an analysis instance', () => {
    const expectedAction = {
      name: 'gprofiler-2',
      type: actions.REMOVE_ANALYSIS,
    };
    expect(actions.removeAnalysis('gprofiler-2')).toEqual(expectedAction);
  });

  it('should dispatch an action to update an analysis instance', () => {
    const updatedAnalysis = { processing: false };
    const expectedAction = {
      analysis: updatedAnalysis,
      name: 'gprofiler-2',
      type: actions.UPDATE_ANALYSIS,
    };
    expect(actions.updateAnalysis('gprofiler-2', updatedAnalysis)).toEqual(expectedAction);
  });

  it('should dispatch an action to update an analysis field', () => {
    const expectedAction = {
      name: 'rsq',
      type: actions.UPDATE_ANALYSIS_FIELD,
      value: 0.5,
    };
    expect(actions.updateAnalysisField('rsq', 0.5)).toEqual(expectedAction);
  });
});

import reducer from './analysis-reducer';
import * as actions from './analysis-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Analysis reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_ANALYSIS action', () => {
    const currentState = {};
    const action = {
      analysis: { processing: true },
      id: 1,
      name: 'analysis-1',
      type: actions.ADD_ANALYSIS,
    };
    const expectedState = {
      ...currentState,
      'analysis-1': { processing: true },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        analysis: {
          analysis1: {},
          analysis2: {},
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      analysis1: {},
      analysis2: {},
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_ANALYSIS action', () => {
    const currentState = {
      'analysis-1': { processing: true },
      'analysis-2': { processing: false },
    };
    const action = {
      name: 'analysis-1',
      type: actions.REMOVE_ANALYSIS,
    };
    const expectedState = {
      'analysis-2': { processing: false },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANALYSIS action', () => {
    const currentState = {
      'analysis-1': { processing: true },
      'analysis-2': { processing: false },
    };
    const action = {
      analysis: {
        error: true,
        processing: false,
      },
      name: 'analysis-1',
      type: actions.UPDATE_ANALYSIS,
    };
    const expectedState = {
      'analysis-1': {
        error: true,
        processing: false,
      },
      'analysis-2': { processing: false },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANALYSIS_FIELD action', () => {
    const currentState = {};
    const action = {
      name: 'rsq',
      type: actions.UPDATE_ANALYSIS_FIELD,
      value: 0.5,
    };
    const expectedState = {
      rsq: 0.5,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

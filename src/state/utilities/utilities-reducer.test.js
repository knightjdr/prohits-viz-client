import reducer, { defaultState } from './utilities-reducer';
import * as actions from './utilities-actions';

describe('Utilities reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_UTILITY_FIELD action', () => {
    const currentState = {};
    const action = {
      field: 'fdr',
      type: actions.SET_UTILITY_FIELD,
      value: 0.05,
    };
    const expectedState = {
      ...currentState,
      fdr: 0.05,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_UTILITY_FIELDS action', () => {
    const currentState = {};
    const action = {
      fields: {
        fdr: 0.01,
        topPreys: 10,
      },
      type: actions.SET_UTILITY_FIELDS,
    };
    const expectedState = {
      ...currentState,
      fdr: 0.01,
      topPreys: 10,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_UTILITY_FILE action', () => {
    const currentState = {};
    const action = {
      files: ['FILE'],
      type: actions.SET_UTILITY_FILE,
    };
    const expectedState = {
      ...currentState,
      files: ['FILE'],
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_UTILITY_TYPE action', () => {
    const currentState = {
      files: ['FILE'],
    };
    const action = {
      type: actions.SET_UTILITY_TYPE,
      utility: 'saint_stats',
    };
    const expectedState = {
      ...currentState,
      utility: 'saint_stats',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

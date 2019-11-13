import reducer from './gprofiler-reducer';
import * as actions from './gprofiler-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Gprofiler reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_GPROFILER_SETTING action', () => {
    const currentState = {
      CORUM: true,
      GO: true,
      HP: true,
    };
    const action = {
      setting: 'CORUM',
      type: actions.CHANGE_GPROFILER_SETTING,
      value: false,
    };
    const expectedState = {
      ...currentState,
      CORUM: false,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_GPROFILER_SETTINGS action', () => {
    const currentState = {
      CORUM: true,
      GO: true,
      HP: true,
    };
    const action = {
      settings: {
        CORUM: false,
        GO: false,
      },
      type: actions.CHANGE_GPROFILER_SETTINGS,
    };
    const expectedState = {
      ...currentState,
      CORUM: false,
      GO: false,
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
        gprofiler: {
          CORUM: true,
          GO: true,
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      CORUM: true,
      GO: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

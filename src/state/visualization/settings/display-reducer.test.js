import reducer from './display-reducer';
import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

const defaultState = {};

describe('Display reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {
      ...defaultState,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action when panel state is not defined', () => {
    const action = {
      file: {
        display: { plotFixed: true },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = { plotFixed: true };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_DISPLAY_SETTING action', () => {
    const currentState = {
      main: {
        plotFixed: false,
      },
    };

    const action = {
      selectionID: 'main',
      setting: 'plotFixed',
      type: actions.UPDATE_DISPLAY_SETTING,
      value: true,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        plotFixed: true,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

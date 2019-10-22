import reducer, { defaultState } from './display-reducer';
import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

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

  it('should handle FIX_PLOT action', () => {
    const currentState = {
      main: {
        fixed: false,
      },
    };

    const action = {
      fixed: true,
      selectionID: 'main',
      type: actions.FIX_PLOT,
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
});

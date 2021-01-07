import reducer from './line-reducer';
import * as actions from './line-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Lines reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        showMidline: true,
      },
    };
    const snapshotState = { showMidline: true };
    const action = {
      lines: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
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

  it('should handle LOAD_INTERACTIVE_STATE action when line state is defined', () => {
    const action = {
      file: {
        lines: {
          showMidline: true,
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      showMidline: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        lines: {
          showMidline: true,
        },
      },
      snapshot1: {
        lines: {
          showMidline: false,
        },
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        lines: {
          showMidline: true,
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_LINE_SETTING action', () => {
    const currentState = {
      main: {
        showFcLine: false,
        showMidline: false,
      },
    };
    const action = {
      setting: 'showMidline',
      snapshotID: 'main',
      type: actions.UPDATE_LINE_SETTING,
      value: true,
    };
    const expectedState = {
      main: {
        showFcLine: false,
        showMidline: true,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

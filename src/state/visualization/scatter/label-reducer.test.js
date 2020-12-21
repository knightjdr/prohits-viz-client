import reducer from './label-reducer';
import * as actions from './label-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Label reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        showAll: false,
        status: { labelA: true },
      },
    };
    const snapshotState = { labelA: false };
    const action = {
      labels: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_PLOT action', () => {
    const currentState = {
      main: {
        showAll: false,
        status: { labelA: true },
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_PLOT,
    };
    const expectedState = {
      ...currentState,
      main: {
        showAll: false,
        status: {},
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_LABELS action', () => {
    const currentState = {
      main: {
        showAll: true,
        status: { labelA: true },
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.CLEAR_LABELS,
    };
    const expectedState = {
      ...currentState,
      main: {
        showAll: false,
        status: {},
      },
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

  it('should handle LOAD_INTERACTIVE_STATE action when panel state is not defined', () => {
    const action = {
      file: {
        labels: {
          showAll: false,
          status: { labelA: true },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      showAll: false,
      status: { labelA: true },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        labels: {
          showAll: false,
          status: {},
        },
      },
      snapshot1: {
        labels: {
          showAll: true,
          status: { labelA: true },
        },
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        labels: {
          showAll: false,
          status: {},
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_LABELS action', () => {
    const currentState = {
      main: {
        showAll: true,
        status: {
          labelA: true,
          labelB: true,
        },
      },
    };

    const action = {
      snapshotID: 'main',
      status: {
        labelA: false,
        labelB: false,
      },
      type: actions.TOGGLE_LABELS,
    };
    const expectedState = {
      ...currentState,
      main: {
        showAll: false,
        status: {
          labelA: false,
          labelB: false,
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_LABEL action', () => {
    const currentState = {
      main: {
        showAll: false,
        status: {
          labelA: true,
          labelB: true,
        },
      },
    };

    const action = {
      snapshotID: 'main',
      label: 'labelA',
      type: actions.UPDATE_LABEL,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        status: {
          labelA: false,
          labelB: true,
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

import reducer from './customization-reducer';
import * as actions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Customization reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const snapshotState = {
      labelA: { color: '#ff0000', radius: 10 },
      labelB: { color: '#000000', radius: 5 },
    };
    const action = {
      customization: snapshotState,
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
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_PLOT,
    };
    const expectedState = {
      ...currentState,
      main: {},
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

  it('should handle DELETE_ALL_POINTS action', () => {
    const currentState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.DELETE_ALL_POINTS,
    };
    const expectedState = {
      main: {},
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_POINT action', () => {
    const currentState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const action = {
      label: 'labelA',
      snapshotID: 'main',
      type: actions.DELETE_POINT,
    };
    const expectedState = {
      main: {
        labelB: { color: '#000000', radius: 5 },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action when label state is not defined', () => {
    const action = {
      file: {
        customization: {
          labelA: { color: '#ff0000', radius: 10 },
          labelB: { color: '#000000', radius: 5 },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      labelA: { color: '#ff0000', radius: 10 },
      labelB: { color: '#000000', radius: 5 },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
      snapshot1: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_POINT action', () => {
    const currentState = {
      main: {
        labelA: { color: '#ff0000', radius: 10 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    const action = {
      label: 'labelA',
      parameters: { color: '#00ff00', radius: 7 },
      snapshotID: 'main',
      type: actions.UPDATE_POINT,
    };
    const expectedState = {
      main: {
        labelA: { color: '#00ff00', radius: 7 },
        labelB: { color: '#000000', radius: 5 },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

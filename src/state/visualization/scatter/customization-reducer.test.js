import reducer from './customization-reducer';
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

  it('should handle LOAD_INTERACTIVE_STATE action when panel state is not defined', () => {
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
        labels: {
          labelA: { color: '#ff0000', radius: 10 },
          labelB: { color: '#000000', radius: 5 },
        },
      },
      snapshot1: {
        labels: {
          labelA: { color: '#ff0000', radius: 10 },
          labelB: { color: '#000000', radius: 5 },
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
          labelA: { color: '#ff0000', radius: 10 },
          labelB: { color: '#000000', radius: 5 },
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

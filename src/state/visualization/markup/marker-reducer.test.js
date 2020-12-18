/* eslint-disable object-curly-newline */

import reducer from './marker-reducer';
import * as actions from './marker-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Marker reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        color: '#000000',
      },
    };
    const snapshotState = {
      color: '#00ff00',
    };
    const action = {
      markers: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle ADD_MARKER action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
        },
      },
    };
    const action = {
      id: 'a2',
      dimensions: { height: 30, width: 100, x: 0.5, y: 0.3 },
      snapshotID: 'main',
      type: actions.ADD_MARKER,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_MARKER_SETTING action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        show: true,
      },
    };
    const action = {
      snapshotID: 'main',
      setting: 'color',
      type: actions.CHANGE_MARKER_SETTING,
      value: '#ff0000',
    };
    const expectedState = {
      main: {
        ...currenState.main,
        color: '#ff0000',
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_ALL_MARKERS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.CLEAR_ALL_MARKERS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {},
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
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
        markers: {
          main: {
            color: '#ff00000',
            show: false,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        color: '#ff00000',
        show: false,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        color: '#000000',
      },
      snapshot1: {
        color: '#00ff00',
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        color: '#000000',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_MARKERS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    const newList = {
      a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
    };
    const action = {
      list: newList,
      snapshotID: 'main',
      type: actions.UPDATE_MARKERS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: newList,
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });
});

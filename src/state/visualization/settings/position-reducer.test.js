import reducer from './position-reducer';
import * as actions from './position-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';
import * as searchActions from '../markup/search-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Position reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        x: 10,
        y: 5,
      },
    };
    const snapshotState = {
      x: 0,
      y: 0,
    };
    const action = {
      position: snapshotState,
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
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        position: {
          main: {
            x: 0.1,
            y: 0.5,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        x: 0.1,
        y: 0.5,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        x: 10,
        y: 5,
      },
      snapshot1: {
        x: 0,
        y: 0,
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        x: 10,
        y: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_STATUS action', () => {
    const action = {
      snapshotID: 'main',
      type: searchActions.SET_SEARCH_STATUS,
      x: 5,
      y: 10,
    };
    const expectedState = {
      main: {
        x: 5,
        y: 10,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SORT_ROWS action', () => {
    const action = {
      snapshotID: 'main',
      type: rowActions.SORT_ROWS,
    };
    const expectedState = {
      main: {
        x: 0,
        y: 0,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_POSITION action', () => {
    const action = {
      snapshotID: 'main',
      type: actions.UPDATE_POSITION,
      x: 0.1,
      y: 0.5,
    };
    const expected = {
      main: { x: 0.1, y: 0.5 },
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });
});

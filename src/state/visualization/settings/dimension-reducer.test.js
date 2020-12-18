import reducer from './dimension-reducer';
import * as actions from './dimension-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Dimension reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        height: 50,
        width: 100,
      },
    };
    const snapshotState = {
      height: 0,
      width: 0,
    };
    const action = {
      dimensions: snapshotState,
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
        dimensions: {
          main: {
            canTranslate: true,
            columns: 0,
            height: 0,
            pageX: 0,
            pageY: 0,
            rows: 0,
            width: 0,
            wrapperHeight: 0,
            wrapperWidth: 0,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        canTranslate: true,
        columns: 0,
        height: 0,
        pageX: 0,
        pageY: 0,
        rows: 0,
        width: 0,
        wrapperHeight: 0,
        wrapperWidth: 0,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        height: 50,
        width: 100,
      },
      snapshot1: {
        height: 20,
        width: 20,
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        height: 50,
        width: 100,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_DIMENSIONS action', () => {
    const currentState = {
      main: {
        columns: 0,
        height: 0,
        pageX: 0,
        pageY: 0,
        rows: 0,
        width: 0,
        wrapperHeight: 0,
        wrapperWidth: 0,
      },
    };

    const action = {
      snapshotID: 'main',
      dimensions: {
        columns: 40,
        height: 500,
        pageX: 30,
        pageY: 20,
        rows: 40,
        width: 500,
        wrapperHeight: 600,
        wrapperWidth: 600,
      },
      type: actions.SET_DIMENSIONS,
    };
    const expectedState = {
      ...currentState,
      main: {
        columns: 40,
        height: 500,
        pageX: 30,
        pageY: 20,
        rows: 40,
        width: 500,
        wrapperHeight: 600,
        wrapperWidth: 600,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

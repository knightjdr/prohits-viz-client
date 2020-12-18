import reducer from './label-reducer';
import * as actions from './label-actions';
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
      main: { labelA: true },
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
        labels: { labelA: true },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = { labelA: true };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: { labelA: true },
      snapshot1: { labelA: false },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: { labelA: true },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_LABEL action', () => {
    const currentState = {
      main: {
        labelA: true,
        labelB: true,
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
        labelA: false,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

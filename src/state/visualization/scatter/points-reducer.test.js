import reducer from './points-reducer';
import * as actions from './points-actions';
import * as cusotmizationActions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Points reducer', () => {
  it('should handle ADD_POINTS action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
      },
    };
    const action = {
      points: {
        b: { color: '#00ff00', radius: 8 },
        c: { color: '#00ff00', radius: 8 },
      },
      snapshotID: 'main',
      type: cusotmizationActions.ADD_POINTS,
    };
    const expectedState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'd' },
          { label: 'b' },
          { label: 'c' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
      },
    };
    const snapshotState = {
      default: [
        { label: 'a' },
        { label: 'b' },
      ],
      current: [
        { label: 'a' },
        { label: 'b' },
      ],
    };
    const action = {
      name: 'snapshot-1',
      points: snapshotState,
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_SCATTER_PLOT action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
      },
    };
    const action = {
      filters: { x: 0, y: 5 },
      points: [
        { label: 'e', x: 0, y: 5 },
        { label: 'f', x: 0, y: 4 },
        { label: 'g', x: 0, y: 6 },
      ],
      snapshotID: 'main',
      type: displayActions.CHANGE_SCATTER_PLOT,
    };
    const expectedState = {
      ...currentState,
      main: {
        default: [
          { label: 'e', x: 0, y: 5 },
          { label: 'f', x: 0, y: 4 },
          { label: 'g', x: 0, y: 6 },
        ],
        current: [
          { label: 'e', x: 0, y: 5 },
          { label: 'g', x: 0, y: 6 },
        ],
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

  it('should handle FILTER_POINTS action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
        current: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.FILTER_POINTS,
      x: 10,
      y: 5,
    };

    const expectedState = {
      main: {
        default: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
        current: [
          { label: 'a', x: 10, y: 5 },
          { label: 'd', x: 15, y: 7 },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action when points state is defined', () => {
    const action = {
      file: {
        points: {
          default: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
            { label: 'd' },
          ],
          current: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
            { label: 'd' },
          ],
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      default: [
        { label: 'a' },
        { label: 'b' },
        { label: 'c' },
        { label: 'd' },
      ],
      current: [
        { label: 'a' },
        { label: 'b' },
        { label: 'c' },
        { label: 'd' },
      ],
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
      },
      snapshot1: {
        default: [
          { label: 'a' },
          { label: 'b' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
        ],
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        default: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
        current: [
          { label: 'a' },
          { label: 'b' },
          { label: 'c' },
          { label: 'd' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SCATTER action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
        current: [
          { label: 'a', x: 10, y: 5 },
          { label: 'd', x: 15, y: 7 },
        ],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.RESET_SCATTER,
    };

    const expectedState = {
      main: {
        default: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
        current: [
          { label: 'a', x: 10, y: 5 },
          { label: 'b', x: 9, y: 5 },
          { label: 'c', x: 10, y: 4 },
          { label: 'd', x: 15, y: 7 },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

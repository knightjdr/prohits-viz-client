import reducer from './circle-reducer';
import * as actions from './circle-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Circle reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    const snapshotState = {
      order: [
        { name: 'attribute1', color: 'blue' },
        { name: 'attribute2', color: 'blue' },
        { name: 'attribute3', color: 'blue' },
      ],
    };
    const action = {
      circles: snapshotState,
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
        circles: {
          order: [
            { name: 'attribute1', color: 'blue' },
            { name: 'attribute2', color: 'blue' },
            { name: 'attribute3', color: 'blue' },
          ],
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      order: [
        { name: 'attribute1', color: 'blue' },
        { name: 'attribute2', color: 'blue' },
        { name: 'attribute3', color: 'blue' },
      ],
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
      snapshot1: {
        order: [
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_CIRCHEATMAP action', () => {
    const currentState = {
      main: {
        defaultOrder: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
        hidden: [
          { name: 'attribute2', color: 'blue' },
        ],
        order: [
          { name: 'attribute3', color: 'blue' },
          { name: 'attribute1', color: 'blue' },
        ],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.RESET_CIRCHEATMAP,
    };
    const expectedState = {
      main: {
        defaultOrder: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
        hidden: [],
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CIRCLE_ORDER action', () => {
    const currentState = {
      main: {
        defaultOrder: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    const action = {
      key: 'order',
      order: [
        { name: 'attribute2', color: 'blue' },
        { name: 'attribute1', color: 'blue' },
        { name: 'attribute3', color: 'blue' },
      ],
      snapshotID: 'main',
      type: actions.UPDATE_CIRCLE_ORDER,
    };
    const expectedState = {
      main: {
        defaultOrder: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
        order: [
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CIRCLE_SETTING action', () => {
    const currentState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    const action = {
      attribute: 'color',
      index: 1,
      snapshotID: 'main',
      type: actions.UPDATE_CIRCLE_SETTING,
      value: 'red',
    };
    const expectedState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'red' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CIRCLE_VISIBILITY action', () => {
    const currentState = {
      main: {
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute2', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    const action = {
      snapshotID: 'main',
      hidden: [
        { name: 'attribute2', color: 'blue' },
      ],
      order: [
        { name: 'attribute1', color: 'blue' },
        { name: 'attribute3', color: 'blue' },
      ],
      type: actions.UPDATE_CIRCLE_VISIBILITY,
    };
    const expectedState = {
      main: {
        hidden: [
          { name: 'attribute2', color: 'blue' },
        ],
        order: [
          { name: 'attribute1', color: 'blue' },
          { name: 'attribute3', color: 'blue' },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

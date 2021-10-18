import reducer from './readouts-reducer';
import * as actions from './readouts-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Readouts reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        default: [
          { label: 'gene1', segments: {} },
          { label: 'gene3', segments: {} },
          { label: 'gene2', segments: {} },
        ],
        current: [
          { label: 'gene1', segments: {} },
          { label: 'gene3', segments: {} },
          { label: 'gene2', segments: {} },
        ],
      },
    };
    const snapshotState = {
      default: [
        { label: 'gene1', segments: {} },
        { label: 'gene3', segments: {} },
      ],
      current: [
        { label: 'gene1', segments: {} },
        { label: 'gene3', segments: {} },
      ],
    };
    const action = {
      name: 'snapshot-1',
      readouts: snapshotState,
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_CIRCHEATMAP_PLOT action', () => {
    const currentState = {
      main: {
        default: [],
        current: [],
      },
    };
    const action = {
      circles: [
        { attribute: 'circle1', filter: 10 },
        { attribute: 'circle2', filter: 5 },
      ],
      readouts: [
        { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
        { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
        { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
        { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
        { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
        { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
      ],
      snapshotID: 'main',
      sortByKnown: true,
      type: displayActions.CHANGE_CIRCHEATMAP_PLOT,
    };
    const expectedState = {
      main: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
        ],
        current: [
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
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

  describe('FILTER_READOUTS action', () => {
    it('should filter readouts by max ', () => {
      const currentState = {
        main: {
          default: [
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
            { known: true, label: 'g', segments: { circle1: 10, circle2: 4 } },
          ],
          current: [
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'g', segments: { circle1: 10, circle2: 4 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          ],
        },
      };
      const action = {
        circles: [
          { attribute: 'circle1', filter: 10 },
          { attribute: 'circle2', filter: 5 },
        ],
        maxReadouts: 3,
        readoutIDs: [],
        sortByKnown: true,
        snapshotID: 'main',
        type: actions.FILTER_READOUTS,
      };
      const expectedState = {
        main: {
          default: [
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
            { known: true, label: 'g', segments: { circle1: 10, circle2: 4 } },
          ],
          current: [
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          ],
        },
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should filter readouts by order ', () => {
      const currentState = {
        main: {
          default: [
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
            { known: true, label: 'g', segments: { circle1: 8, circle2: 4 } },
          ],
          current: [
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: true, label: 'g', segments: { circle1: 8, circle2: 4 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          ],
        },
      };
      const action = {
        circles: [
          { attribute: 'circle1', filter: 0 },
          { attribute: 'circle2', filter: 0 },
        ],
        maxReadouts: Infinity,
        readoutIDs: ['c', 'b', 'a'],
        sortByKnown: true,
        snapshotID: 'main',
        type: actions.FILTER_READOUTS,
      };
      const expectedState = {
        main: {
          default: [
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
            { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
            { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
            { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
            { known: true, label: 'g', segments: { circle1: 8, circle2: 4 } },
          ],
          current: [
            { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
            { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
            { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          ],
        },
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });

  it('should handle LOAD_INTERACTIVE_STATE action when circle state is defined', () => {
    const action = {
      file: {
        circles: {
          main: {
            order: [
              { attribute: 'circle1', filter: 10 },
              { attribute: 'circle2', filter: 5 },
            ],
          },
        },
        readouts: {
          main: {
            default: [
              { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
              { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
              { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
              { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
              { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
              { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
              { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
            ],
          },
        },
        settings: {
          main: {
            current: {
              maxReadouts: 3,
              readoutIDs: [],
              sortByKnown: true,
            },
          },
        },
      },
      snapshotID: 'main',
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };

    const expectedState = {
      main: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
        ],
        current: [
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
        ],
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        ],
        current: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        ],
      },
      snapshot1: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        ],
        current: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
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
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        ],
        current: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_CIRCHEATMAP action', () => {
    const currentState = {
      main: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
        ],
        current: [
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
        ],
      },
    };
    const action = {
      snapshotID: 'main',
      circles: [
        { attribute: 'circle1', filter: 0 },
        { attribute: 'circle2', filter: 0 },
      ],
      maxReadouts: Infinity,
      readoutIDs: [],
      sortByKnown: true,
      type: displayActions.RESET_CIRCHEATMAP,
    };
    const expectedState = {
      main: {
        default: [
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
          { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
        ],
        current: [
          { known: true, label: 'b', segments: { circle1: 11, circle2: 6 } },
          { known: true, label: 'a', segments: { circle1: 10, circle2: 5 } },
          { known: true, label: 'd', segments: { circle1: 10, circle2: 4 } },
          { known: true, label: 'c', segments: { circle1: 9, circle2: 5 } },
          { known: false, label: 'e', segments: { circle1: 12, circle2: 7 } },
          { known: false, label: 'd', segments: { circle1: 10, circle2: 5 } },
          { known: false, label: 'f', segments: { circle1: 10, circle2: 4 } },
        ],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

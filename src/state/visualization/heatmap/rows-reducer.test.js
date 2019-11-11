import reducer from './rows-reducer';
import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {
  defaultOrder: [],
  deleted: [],
  direction: null,
  order: [],
  sortBy: '',
};

describe('Rows reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_HEATMAP_SNAPSHOT action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2, 3, 4],
        order: [0, 1, 2, 3, 4],
      },
    };
    const snapshotState = {
      defaultOrder: [0, 2, 3],
      order: [0, 2, 3],
    };
    const action = {
      rows: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_HEATMAP_SNAPSHOT,
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

  it('should handle DELETE_ROW action', () => {
    const currentState = {
      main: {
        ...defaultState,
        deleted: [],
        order: [0, 1, 2],
      },
    };

    const action = {
      snapshotID: 'main',
      index: 1,
      order: [0, 2],
      type: actions.DELETE_ROW,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        deleted: [1],
        order: [0, 2],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_ROW_ORDER action', () => {
    const currentState = {
      main: {
        ...defaultState,
        order: [0, 1, 2],
        sortBy: 'a',
      },
    };

    const action = {
      snapshotID: 'main',
      order: [1, 2, 0],
      type: actions.SET_ROW_ORDER,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        order: [1, 2, 0],
        sortBy: '',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('LOAD_INTERACTIVE_STATE action', () => {
    it('should handle action when rows field present', () => {
      const action = {
        file: {
          rows: {
            main: {
              defaultOrder: ['a', 'b', 'c'],
              direction: 'asc',
              order: ['a', 'b', 'c'],
              sortBy: 'b',
            },
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        main: {
          defaultOrder: ['a', 'b', 'c'],
          direction: 'asc',
          order: ['a', 'b', 'c'],
          sortBy: 'b',
        },
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle action when rows field missing', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {};
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle RESET_IMAGE action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2],
        order: [1, 2, 0],
      },
    };

    const action = {
      snapshotID: 'main',
      type: displayActions.RESET_IMAGE,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        direction: null,
        deleted: [],
        order: [0, 1, 2],
        sortBy: '',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SORT_ROWS action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };

    const action = {
      snapshotID: 'main',
      direction: 'asc',
      order: [1, 2, 0],
      sortBy: 'b',
      type: actions.SORT_ROWS,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        direction: 'asc',
        order: [1, 2, 0],
        sortBy: 'b',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

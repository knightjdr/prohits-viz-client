import reducer from './columns-reducer';
import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {
  defaultOrder: [],
  filterOrder: [],
  order: [],
  sortOrder: [],
  ref: null,
};

describe('Columns reducer', () => {
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
      columns: snapshotState,
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

  it('should handle DELETE_COLUMN action', () => {
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
      type: actions.DELETE_COLUMN,
    };
    const expectedState = {
      main: {
        ...currentState.main,
        deleted: [1],
        order: [0, 2],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle LOAD_INTERACTIVE_STATE action when columns field present', () => {
      const action = {
        file: {
          columns: {
            main: {
              ref: 'a',
              order: [0, 1, 2],
            },
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        main: {
          ref: 'a',
          order: [0, 1, 2],
        },
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when columns field missing', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {};
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle REMOVE_HEATMAP_SNAPSHOT action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2, 3, 4],
        order: [0, 1, 2, 3, 4],
      },
      snapshot1: {
        defaultOrder: [0, 2, 3],
        order: [0, 2, 3],
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_HEATMAP_SNAPSHOT,
    };
    const expectedState = {
      main: {
        defaultOrder: [0, 1, 2, 3, 4],
        order: [0, 1, 2, 3, 4],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_IMAGE action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [2],
        order: [1, 0],
        ref: 1,
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
        deleted: [],
        order: [0, 1, 2],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_COLUMN_ORDER action', () => {
    const currentState = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };

    const action = {
      snapshotID: 'main',
      order: [0, 2],
      type: actions.SET_COLUMN_ORDER,
    };
    const expectedState = {
      main: {
        ...currentState.main,
        order: [0, 2],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_COLUMN_REFERENCE action', () => {
    const currentState = {
      main: {
        defaultOrder: [],
        order: [],
        ref: null,
      },
    };

    const action = {
      snapshotID: 'main',
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    const expectedState = {
      main: {
        defaultOrder: [],
        order: [],
        ref: 'a',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

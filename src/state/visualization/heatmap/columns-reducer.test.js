import reducer from './columns-reducer';
import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

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

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle LOAD_INTERACTIVE_STATE action when columns field present', () => {
      const action = {
        file: {
          columns: {
            main: {
              ref: 'a',
              names: ['a', 'b', 'c'],
            },
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        main: {
          ref: 'a',
          names: ['a', 'b', 'c'],
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

  it('should handle RESET_IMAGE action', () => {
    const currentState = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [1, 2, 0],
        order: [1, 2, 0],
        ref: 1,
        sortOrder: [2, 1],
      },
    };

    const action = {
      selectionID: 'main',
      type: displayActions.RESET_IMAGE,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        filterOrder: [],
        order: [0, 1, 2],
        sortOrder: [],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_COLUMN_FILTER_ORDER action', () => {
    const currentState = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };

    const action = {
      selectionID: 'main',
      order: [0, 2],
      type: actions.SET_COLUMN_FILTER_ORDER,
    };
    const expectedState = {
      main: {
        ...currentState.main,
        filterOrder: [0, 2],
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
      selectionID: 'main',
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

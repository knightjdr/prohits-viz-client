import reducer, { defaultState } from './columns-reducer';
import * as actions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

describe('Columns reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FILTER_ROWS action', () => {
    const currentState = {
      main: {
        ...defaultState,
        order: [0, 1, 2],
      },
    };

    const action = {
      columnOrder: [1, 2, 0],
      dataID: 'main',
      type: rowActions.FILTER_ROWS,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        order: [1, 2, 0],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle PARSE_INTERACTIVE_FILE action when columns field present', () => {
      const action = {
        file: {
          columns: {
            main: {
              ref: 'a',
              names: ['a', 'b', 'c'],
            },
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        main: {
          ref: 'a',
          names: ['a', 'b', 'c'],
        },
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when columns field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
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
        ref: 1,
      },
    };

    const action = {
      dataID: 'main',
      type: displayActions.RESET_IMAGE,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        order: [0, 1, 2],
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
      dataID: 'main',
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

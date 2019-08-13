import genesReducer, { defaultState } from './selection-reducer';
import * as actions from './selection-actions';
import * as fileActions from './interactive-file-actions';
import * as rowActions from './rows-actions';

describe('Gene selection reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(genesReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = defaultState;
    expect(genesReducer(undefined, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle PARSE_INTERACTIVE_FILE action when selection field present', () => {
      const action = {
        file: {
          selection: {
            columnMap: { a: 0, b: 1, c: 2 },
            columns: ['a', 'b', 'c'],
            columnsSelected: ['b'],
            rowMap: { d: 0, e: 1, f: 2 },
            rows: ['d', 'e', 'f'],
            rowsSelected: ['d', 'e'],
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        columnMap: { a: 0, b: 1, c: 2 },
        columns: ['a', 'b', 'c'],
        columnsSelected: ['b'],
        rowMap: { d: 0, e: 1, f: 2 },
        rows: ['d', 'e', 'f'],
        rowsSelected: ['d', 'e'],
      };
      expect(genesReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when selection field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = defaultState;
      expect(genesReducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle RESTORE_ROWS action', () => {
    const action = {
      rows: {
        list: ['d', 'e', 'f'],
        mapped: { d: 0, e: 1, f: 2 },
      },
      type: rowActions.RESTORE_ROWS,
    };
    const expectedState = {
      ...defaultState,
      rowMap: { d: 0, e: 1, f: 2 },
      rows: ['d', 'e', 'f'],
    };
    expect(genesReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ROWS action', () => {
    const action = {
      rows: {
        list: ['d', 'e', 'f'],
        mapped: { d: 0, e: 1, f: 2 },
      },
      type: rowActions.UPDATE_ROWS,
    };
    const expectedState = {
      ...defaultState,
      rowMap: { d: 0, e: 1, f: 2 },
      rows: ['d', 'e', 'f'],
    };
    expect(genesReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SELECTIONS action', () => {
    const action = {
      selections: {
        columns: ['a', 'b', 'c'],
        rows: ['d', 'e', 'f'],
      },
      type: actions.UPDATE_SELECTIONS,
    };
    const expectedState = {
      ...defaultState,
      columns: ['a', 'b', 'c'],
      rows: ['d', 'e', 'f'],
    };
    expect(genesReducer(undefined, action)).toEqual(expectedState);
  });
});

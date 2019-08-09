import reducer, { defaultState } from './columns-reducer';
import * as actions from './columns-actions';
import * as fileActions from './interactive-file-actions';

describe('Columns reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = {
      ...defaultState,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle PARSE_INTERACTIVE_FILE action when columns field present', () => {
      const action = {
        file: {
          columns: {
            ref: 'a',
            names: ['a', 'b', 'c'],
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        ref: 'a',
        names: ['a', 'b', 'c'],
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when columns field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = { ...defaultState };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle SET_COLUMN_REFERENCE action', () => {
    const action = {
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    const expectedState = {
      names: [],
      ref: 'a',
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

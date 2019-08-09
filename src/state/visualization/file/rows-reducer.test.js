import reducer, { defaultState } from './rows-reducer';
import * as fileActions from './interactive-file-actions';

describe('Rows reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('PARSE_INTERACTIVE_FILE action', () => {
    it('should handle action when rows field present', () => {
      const list = [
        { data: {}, name: 'a' },
        { data: {}, name: 'b' },
        { data: {}, name: 'c' },
      ];
      const action = {
        file: {
          rows: {
            direction: 'asc',
            list,
            order: ['a', 'b', 'c'],
            sortBy: 1,
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        direction: 'asc',
        list,
        order: ['a', 'b', 'c'],
        sortBy: 1,
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle action when rows field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = defaultState;
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});

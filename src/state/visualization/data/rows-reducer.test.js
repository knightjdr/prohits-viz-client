import reducer, { defaultState } from './rows-reducer';
import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
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

  it('should handle FILTER_ROWS action', () => {
    const currentState = {
      ...defaultState,
      order: [0, 1, 2],
    };

    const action = {
      order: [1, 2, 0],
      type: actions.FILTER_ROWS,
    };
    const expectedState = {
      ...currentState,
      order: [1, 2, 0],
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
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
            defaultOrder: ['a', 'b', 'c'],
            direction: 'asc',
            list,
            order: ['a', 'b', 'c'],
            sortBy: 1,
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        defaultOrder: ['a', 'b', 'c'],
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

  it('should handle RESET_IMAGE action', () => {
    const list = [
      { data: {}, name: 'a' },
      { data: {}, name: 'b' },
      { data: {}, name: 'c' },
    ];
    const currentState = {
      defaultOrder: [0, 1, 2],
      list,
      order: [1, 2, 0],
    };

    const action = {
      type: displayActions.RESET_IMAGE,
    };
    const expectedState = {
      ...currentState,
      direction: null,
      order: [0, 1, 2],
      sortBy: null,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SORT_ROWS action', () => {
    const list = [
      { data: {}, name: 'a' },
      { data: {}, name: 'b' },
      { data: {}, name: 'c' },
    ];
    const currentState = {
      defaultOrder: [0, 1, 2],
      list,
      order: [0, 1, 2],
    };

    const action = {
      direction: 'asc',
      order: [1, 2, 0],
      sortBy: 1,
      type: actions.SORT_ROWS,
    };
    const expectedState = {
      ...currentState,
      direction: 'asc',
      order: [1, 2, 0],
      sortBy: 1,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

import reducer, { defaultState } from './rows-reducer';
import * as actions from './rows-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Rows reducer', () => {
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
      dataID: 'main',
      order: [1, 2, 0],
      type: actions.FILTER_ROWS,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        filterOrder: [1, 2, 0],
        order: [1, 2, 0],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('PARSE_INTERACTIVE_FILE action', () => {
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
        type: fileActions.PARSE_INTERACTIVE_FILE,
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
        direction: null,
        filterOrder: [],
        order: [0, 1, 2],
        sortBy: '',
        sortOrder: [],
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
      dataID: 'main',
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
        sortOrder: [1, 2, 0],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

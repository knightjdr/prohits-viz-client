import redcuer from './position-reducer';
import * as actions from './position-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from '../heatmap/rows-actions';
import * as searchActions from '../markup/search-actions';

describe('Position reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FILTER_ROWS action', () => {
    const action = {
      selectionID: 'main',
      type: rowActions.FILTER_ROWS,
    };
    const expectedState = {
      main: {
        x: 0,
        y: 0,
      },
    };
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        position: {
          main: {
            x: 0.1,
            y: 0.5,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        x: 0.1,
        y: 0.5,
      },
    };
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_STATUS action', () => {
    const action = {
      selectionID: 'main',
      type: searchActions.SET_SEARCH_STATUS,
      x: 5,
      y: 10,
    };
    const expectedState = {
      main: {
        x: 5,
        y: 10,
      },
    };
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SORT_ROWS action', () => {
    const action = {
      selectionID: 'main',
      type: rowActions.SORT_ROWS,
    };
    const expectedState = {
      main: {
        x: 0,
        y: 0,
      },
    };
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_POSITION action', () => {
    const action = {
      selectionID: 'main',
      type: actions.UPDATE_POSITION,
      x: 0.1,
      y: 0.5,
    };
    const expected = {
      main: { x: 0.1, y: 0.5 },
    };
    expect(redcuer(undefined, action)).toEqual(expected);
  });
});

import reducer from './poi-reducer';
import * as actions from './poi-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('POI reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_POI action', () => {
    const currenState = {
      main: {
        columns: [3, 4],
        rows: [5, 1, 2],
      },
    };
    const action = {
      poi: {
        columns: [3],
        rows: [5, 1, 2, 0],
      },
      snapshotID: 'main',
      type: actions.UPDATE_POI,
    };
    const expectedState = {
      main: {
        columns: [3],
        rows: [5, 1, 2, 0],
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        poi: {
          main: {
            columns: [3, 4],
            rows: [5, 1, 2],
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        columns: [3, 4],
        rows: [5, 1, 2],
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

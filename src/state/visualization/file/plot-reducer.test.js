import reducer, { defaultState } from './plot-reducer';
import * as actions from './plot-actions';
import * as fileActions from './interactive-file-actions';

describe('Plot reducer', () => {
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

  it('should handle CHANGE_PLOT action', () => {
    const action = {
      plot: { data: [] },
      type: actions.CHANGE_PLOT,
    };
    const expectedState = { data: [] };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle PARSE_INTERACTIVE_FILE action when plot field present', () => {
      const action = {
        file: {
          plot: { data: [] },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = { data: [] };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when plot field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = defaultState;
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});

import reducer from './panel-reducer';
import * as actions from './panel-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Panel reducer', () => {
  it('should return default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_PANEL_TAB action', () => {
    const action = {
      tab: 'map',
      type: actions.CHANGE_PANEL_TAB,
    };
    const expectedState = {
      tab: 'map',
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('toggle panel', () => {
    it('should handle TOGGLE_PANEL action when new setting is passed', () => {
      const currentState = {
        open: true,
      };
      const action = {
        type: actions.TOGGLE_PANEL,
        visibility: false,
      };
      const expectedState = {
        open: false,
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should handle TOGGLE_PANEL action when new setting is undefined', () => {
      const currentState = {
        open: false,
      };
      const action = {
        type: actions.TOGGLE_PANEL,
      };
      const expectedState = {
        open: true,
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe('file actions', () => {
    it('should handle CLEAR_INTERACTIVE_STATE action', () => {
      const action = {
        type: fileActions.CLEAR_INTERACTIVE_STATE,
      };
      const expectedState = {};
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when panel state is defined', () => {
      const action = {
        file: {
          panel: {
            open: false,
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        open: false,
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when panel state is not defined', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {};
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});

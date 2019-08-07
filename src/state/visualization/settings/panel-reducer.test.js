import panelReducer, { defaultState } from './panel-reducer';
import * as actions from './panel-actions';
import * as fileActions from '../file/interactive-file-actions';

describe('Panel reducer set reducer', () => {
  it('should return default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(panelReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_PANEL_TAB action', () => {
    const action = {
      tab: 'map',
      type: actions.CHANGE_PANEL_TAB,
    };
    const expectedState = {
      ...defaultState,
      tab: 'map',
    };
    expect(panelReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_PANEL action', () => {
    const action = {
      type: actions.TOGGLE_PANEL,
    };
    const expectedState = {
      ...defaultState,
      open: false,
    };
    expect(panelReducer(undefined, action)).toEqual(expectedState);
  });

  describe('file actions', () => {
    it('should handle CLEAR_INTERACTIVE_FILE action', () => {
      const action = {
        type: fileActions.CLEAR_INTERACTIVE_FILE,
      };
      const expectedState = {
        ...defaultState,
        open: true,
      };
      expect(panelReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when panel state is defined', () => {
      const action = {
        file: {
          panel: {
            open: false,
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        open: false,
      };
      expect(panelReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when panel state is not defined', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = defaultState;
      expect(panelReducer(undefined, action)).toEqual(expectedState);
    });
  });
});

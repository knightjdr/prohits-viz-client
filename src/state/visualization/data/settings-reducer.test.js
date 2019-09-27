import reducer, { defaultState } from './settings-reducer';
import * as actions from './settings-actions';
import * as fileActions from './interactive-file-actions';

describe('Settings reducer', () => {
  it('should return a default initial state', () => {
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

  it('should handle PARSE_INTERACTIVE_FILE action', () => {
    const action = {
      file: {
        settings: {
          current: { fillColor: 'green' },
          default: {},
        },
      },
      type: fileActions.PARSE_INTERACTIVE_FILE,
    };
    const expectedState = {
      current: { fillColor: 'green' },
      default: {},
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle RESET_SETTINGS action', () => {
    const action = {
      type: actions.RESET_SETTINGS,
    };
    const expectedState = {
      ...defaultState,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SETTING action', () => {
    const action = {
      setting: 'imageType',
      type: actions.UPDATE_SETTING,
      value: 'test',
    };
    const expectedState = {
      ...defaultState,
      current: {
        ...defaultState.current,
        imageType: 'test',
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

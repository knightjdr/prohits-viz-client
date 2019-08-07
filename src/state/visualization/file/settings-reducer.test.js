import SettingsReducer, { defaultState } from './settings-reducer';
import * as actions from './settings-actions';
import * as fileActions from '../interactive-file-actions';

const DefaultState = {
  current: defaultState,
  default: defaultState,
  reset: false,
};

describe('SettingsReducer set reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = DefaultState;
    expect(SettingsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = {
      ...DefaultState,
    };
    expect(SettingsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle PARSE_INTERACTIVE_FILE action', () => {
    const action = {
      file: {
        settings: {
          current: { fillColor: 'greenBlack' },
        },
      },
      type: fileActions.PARSE_INTERACTIVE_FILE,
    };
    const expectedState = {
      current: { fillColor: 'greenBlack' },
      default: defaultState,
      reset: false,
    };
    expect(SettingsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle RESET_SETTINGS action', () => {
    const action = {
      type: actions.RESET_SETTINGS,
    };
    const expectedState = {
      ...DefaultState,
      reset: true,
    };
    expect(SettingsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SETTING action', () => {
    const action = {
      setting: 'imageType',
      type: actions.UPDATE_SETTING,
      value: 'test',
    };
    const expectedState = {
      ...DefaultState,
      current: {
        ...DefaultState.current,
        imageType: 'test',
      },
      reset: false,
    };
    expect(SettingsReducer(undefined, action)).toEqual(expectedState);
  });
});

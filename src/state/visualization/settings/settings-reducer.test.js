import reducer from './settings-reducer';
import * as actions from './settings-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Settings reducer', () => {
  it('should return a default initial state', () => {
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

  it('should handle PARSE_INTERACTIVE_FILE action', () => {
    const action = {
      file: {
        settings: {
          main: {
            current: { fillColor: 'green' },
            default: {},
          },
        },
      },
      type: fileActions.PARSE_INTERACTIVE_FILE,
    };
    const expectedState = {
      main: {
        current: { fillColor: 'green' },
        default: {},
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle RESET_SETTINGS action', () => {
    const currentState = {
      main: {
        current: { fillColor: 'red' },
        default: { fillColor: 'blue' },
      },
    };

    const action = {
      dataID: 'main',
      type: actions.RESET_SETTINGS,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        current: { fillColor: 'blue' },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SETTING action', () => {
    const currentState = {
      main: {
        current: { fillColor: 'blue' },
        default: { fillColor: 'blue' },
      },
    };

    const action = {
      dataID: 'main',
      setting: 'fillColor',
      type: actions.UPDATE_SETTING,
      value: 'red',
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        current: { fillColor: 'red' },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

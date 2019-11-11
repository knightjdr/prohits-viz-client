import reducer from './settings-reducer';
import * as actions from './settings-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Settings reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_HEATMAP_SNAPSHOT action', () => {
    const currentState = {
      main: {
        current: { fillColor: 'blue' },
        default: { fillColor: 'blue' },
      },
    };
    const snapshotState = {
      current: { fillColor: 'red' },
      default: { fillColor: 'blue' },
    };
    const action = {
      settings: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_HEATMAP_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
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
        settings: {
          main: {
            current: { fillColor: 'green' },
            default: {},
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        current: { fillColor: 'green' },
        default: {},
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SETTING action', () => {
    const currentState = {
      main: {
        current: { fillColor: 'blue' },
        default: { fillColor: 'blue' },
      },
    };

    const action = {
      snapshotID: 'main',
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

  it('should handle UPDATE_SETTINGS action', () => {
    const currentState = {
      main: {
        current: {
          edgeColor: 'blue',
          fillColor: 'blue',
        },
        default: {
          edgeColor: 'blue',
          fillColor: 'blue',
        },
      },
    };

    const action = {
      snapshotID: 'main',
      settings: {
        edgeColor: 'red',
        fillColor: 'red',
      },
      type: actions.UPDATE_SETTINGS,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        current: {
          edgeColor: 'red',
          fillColor: 'red',
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

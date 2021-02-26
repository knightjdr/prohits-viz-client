import reducer from './display-reducer';
import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Display reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        plotFixed: false,
        showTooltips: true,
      },
    };
    const snapshotState = {
      plotFixed: false,
      showTooltips: false,
    };
    const action = {
      display: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_SCATTER_PLOT action', () => {
    const currentState = {
      main: {
        selectedPlot: 0,
      },
    };

    const action = {
      snapshotID: 'main',
      setting: 'selectedPlot',
      type: actions.CHANGE_SCATTER_PLOT,
      value: 1,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        selectedPlot: 1,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {
      ...defaultState,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action when panel state is not defined', () => {
    const action = {
      file: {
        display: { plotFixed: true },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = { plotFixed: true };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        plotFixed: false,
        showTooltips: true,
      },
      snapshot1: {
        plotFixed: false,
        showTooltips: false,
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        plotFixed: false,
        showTooltips: true,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SCATTER action', () => {
    const currentState = {
      main: {
        plotFixed: false,
        transform: {
          matrix: { plot: 'translate(10 10)' },
          scale: 2,
        },
      },
    };

    const action = {
      snapshotID: 'main',
      type: actions.RESET_SCATTER,
      value: {
        transform: {
          matrix: { plot: '' },
          scale: 1,
        },
      },
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        plotFixed: false,
        transform: {
          matrix: { plot: '' },
          scale: 1,
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SCATTER_TRANSFORMATIONS action', () => {
    const currentState = {
      main: {
        plotFixed: false,
        transform: {
          matrix: { plot: 'translate(10 10)' },
          scale: 2,
        },
      },
    };

    const action = {
      snapshotID: 'main',
      type: actions.RESET_SCATTER_TRANSFORMATIONS,
      value: {
        transform: {
          matrix: { plot: '' },
          scale: 1,
        },
      },
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        plotFixed: false,
        transform: {
          matrix: { plot: '' },
          scale: 1,
        },
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_DISPLAY_SETTING action', () => {
    const currentState = {
      main: {
        plotFixed: false,
      },
    };

    const action = {
      snapshotID: 'main',
      setting: 'plotFixed',
      type: actions.UPDATE_DISPLAY_SETTING,
      value: true,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        plotFixed: true,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});

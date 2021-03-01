import reducer from './poi-reducer';
import * as actions from './poi-actions';
import * as customizationActions from '../scatter/customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as pointsActions from '../scatter/points-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('POI reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_POINTS action', () => {
    const currentState = {
      main: {
        points: [2, 3],
      },
    };
    const action = {
      points: {
        labelB: { color: '#00ff00', radius: 8 },
        labelC: { color: '#00ff00', radius: 8 },
      },
      snapshotID: 'main',
      noTotalPoints: 10,
      type: customizationActions.ADD_POINTS,
    };
    const expectedState = {
      main: {
        points: [8, 9],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        columns: [0, 1, 2, 3, 4],
        rows: [0, 1, 2, 3, 4],
      },
    };
    const snapshotState = {
      columns: [0, 2, 3],
      rows: [0, 2, 3],
    };
    const action = {
      poi: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_CIRCHEATMAP_PLOT action', () => {
    const currentState = {
      main: {
        readouts: [2, 3],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_CIRCHEATMAP_PLOT,
    };
    const expectedState = {
      main: {
        readouts: [],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_SCATTER_PLOT action', () => {
    const currentState = {
      main: {
        points: [2, 3],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_SCATTER_PLOT,
    };
    const expectedState = {
      main: {
        points: [],
      },
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

  it('should handle FILTER_POINTS action', () => {
    const currentState = {
      main: {
        points: [2, 3],
      },
    };
    const action = {
      snapshotID: 'main',
      type: pointsActions.FILTER_POINTS,
    };
    const expectedState = {
      main: {
        points: [],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
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

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        columns: [0, 1, 2, 3, 4],
        rows: [0, 1, 2, 3, 4],
      },
      snapshot1: {
        columns: [0, 2, 3],
        rows: [0, 2, 3],
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        columns: [0, 1, 2, 3, 4],
        rows: [0, 1, 2, 3, 4],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_CIRCHEATMAP action', () => {
    const currentState = {
      main: {
        readouts: [2, 3],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.RESET_CIRCHEATMAP,
    };
    const expectedState = {
      main: {
        readouts: [],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SCATTER action', () => {
    const currentState = {
      main: {
        points: [2, 3],
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.RESET_SCATTER,
    };
    const expectedState = {
      main: {
        points: [],
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
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
});

import reducer from './tabs-reducer';
import * as actions from './tabs-actions';
import * as analysisActions from '../analysis/analysis-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Tab reducer', () => {
  it('should return default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_ANALYSIS action', () => {
    const currentState = {
      active: 'main',
      activeSnapshot: 'main',
      analysisID: 1,
      availableAnalyses: ['analysis-1'],
      availableSnapshots: ['main'],
      snapshotID: 1,
      tabType: 'snapshot',
    };
    const action = {
      id: 2,
      name: 'analysis-2',
      type: analysisActions.ADD_ANALYSIS,
    };
    const expectedState = {
      ...currentState,
      active: 'analysis-2',
      analysisID: 2,
      availableAnalyses: ['analysis-1', 'analysis-2'],
      tabType: 'analysis',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle ADD_HEATMAP_SNAPSHOT action', () => {
    const currentState = {
      active: 'analysis-1',
      activeSnapshot: 'main',
      availableAnalyses: ['analysis-1'],
      availableSnapshots: ['main'],
      snapshotID: 1,
      tabType: 'analysis',
    };
    const action = {
      id: 2,
      name: 'snapshot-2',
      type: snapshotActions.ADD_HEATMAP_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      active: 'snapshot-2',
      activeSnapshot: 'snapshot-2',
      availableSnapshots: ['main', 'snapshot-2'],
      snapshotID: 2,
      tabType: 'snapshot',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_ACTIVE_ANALYSIS action', () => {
    const currentState = {
      active: 'snapshot-1',
      activeSnapshot: 'snapshot-1',
      analysisID: 2,
      availableAnalyses: ['analysis-1', 'analysis-2'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
      tabType: 'snapshot',
    };
    const action = {
      name: 'analysis-2',
      type: actions.CHANGE_ACTIVE_ANALYSIS,
    };
    const expectedState = {
      ...currentState,
      active: 'analysis-2',
      tabType: 'analysis',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_ACTIVE_SNAPSHOT action', () => {
    const currentState = {
      active: 'analysis-1',
      activeSnapshot: 'snapshot-1',
      availableAnalyses: ['analysis-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
      tabType: 'analysis',
    };
    const action = {
      name: 'main',
      type: actions.CHANGE_ACTIVE_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      active: 'main',
      activeSnapshot: 'main',
      tabType: 'snapshot',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('file actions', () => {
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
          tabs: {
            active: 'tab1',
            available: ['tab1', 'tab2'],
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        active: 'tab1',
        available: ['tab1', 'tab2'],
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Remove analysis', () => {
    it('should remove an analysis that is not currently active', () => {
      const currentState = {
        active: 'analysis-2',
        activeSnapshot: 'main',
        analysisID: 2,
        availableAnalyses: ['analysis-1', 'analysis-2'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'analysis',
      };
      const action = {
        name: 'analysis-1',
        type: analysisActions.REMOVE_ANALYSIS,
      };
      const expectedState = {
        ...currentState,
        availableAnalyses: ['analysis-2'],
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should remove an analysis that is active', () => {
      const currentState = {
        active: 'analysis-2',
        activeSnapshot: 'main',
        analysisID: 2,
        availableAnalyses: ['analysis-1', 'analysis-2'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'analysis',
      };
      const action = {
        name: 'analysis-2',
        type: analysisActions.REMOVE_ANALYSIS,
      };
      const expectedState = {
        ...currentState,
        active: 'main',
        availableAnalyses: ['analysis-1'],
        tabType: 'snapshot',
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe('Remove heat map snapshot', () => {
    it('should remove a snapshot that is not currently active', () => {
      const currentState = {
        active: 'analysis-1',
        activeSnapshot: 'main',
        availableAnalyses: ['analysis-1'],
        availableSnapshots: ['main', 'snapshot-1', 'snapshot-2'],
        snapshotID: 1,
        tabType: 'analysis',
      };
      const action = {
        name: 'snapshot-1',
        type: snapshotActions.REMOVE_HEATMAP_SNAPSHOT,
      };
      const expectedState = {
        ...currentState,
        availableSnapshots: ['main', 'snapshot-2'],
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should remove a snapshot that is not currently visible (active) but is the active snapshot', () => {
      const currentState = {
        active: 'analysis-1',
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['analysis-1'],
        availableSnapshots: ['main', 'snapshot-1', 'snapshot-2'],
        snapshotID: 1,
        tabType: 'analysis',
      };
      const action = {
        name: 'snapshot-1',
        type: snapshotActions.REMOVE_HEATMAP_SNAPSHOT,
      };
      const expectedState = {
        ...currentState,
        activeSnapshot: 'main',
        availableSnapshots: ['main', 'snapshot-2'],
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should remove a snapshot that is visible (active) and is the active snapshot', () => {
      const currentState = {
        active: 'snapshot-1',
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['analysis-1'],
        availableSnapshots: ['main', 'snapshot-1', 'snapshot-2'],
        snapshotID: 1,
        tabType: 'snapshot',
      };
      const action = {
        name: 'snapshot-1',
        type: snapshotActions.REMOVE_HEATMAP_SNAPSHOT,
      };
      const expectedState = {
        ...currentState,
        active: 'main',
        activeSnapshot: 'main',
        availableSnapshots: ['main', 'snapshot-2'],
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });
});

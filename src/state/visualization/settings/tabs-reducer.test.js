import reducer from './tabs-reducer';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Panel reducer', () => {
  it('should return default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_HEATMAP_SNAPSHOT action', () => {
    const currentState = {
      active: 'main',
      availableSnapshots: ['main'],
      snapshotID: 1,
    };
    const action = {
      id: 2,
      name: 'snapshot-2',
      type: snapshotActions.ADD_HEATMAP_SNAPSHOT,
    };
    const expectedState = {
      active: 'snapshot-2',
      activeSnapshot: 'snapshot-2',
      availableSnapshots: ['main', 'snapshot-2'],
      snapshotID: 2,
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
});

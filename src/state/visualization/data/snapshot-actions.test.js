import * as actions from './snapshot-actions';

describe('Snapshot actions', () => {
  it('should dispatch an action to add a snapshot', () => {
    const content = {
      annotations: {},
      markers: {},
    };
    const expectedAction = {
      ...content,
      id: 1,
      name: 'snapshot-1',
      type: actions.ADD_HEATMAP_SNAPSHOT,
    };
    expect(actions.addHeatmapSnapshot(1, 'snapshot-1', content)).toEqual(expectedAction);
  });

  it('should dispatch an action to remove a snapshot', () => {
    const expectedAction = {
      name: 'snapshot-1',
      type: actions.REMOVE_HEATMAP_SNAPSHOT,
    };
    expect(actions.removeHeatmapSnapshot('snapshot-1')).toEqual(expectedAction);
  });
});

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
      type: actions.ADD_SNAPSHOT,
    };
    expect(actions.addSnapshot(1, 'snapshot-1', content)).toEqual(expectedAction);
  });

  it('should dispatch an action to remove a snapshot', () => {
    const expectedAction = {
      name: 'snapshot-1',
      type: actions.REMOVE_SNAPSHOT,
    };
    expect(actions.removeSnapshot('snapshot-1')).toEqual(expectedAction);
  });
});

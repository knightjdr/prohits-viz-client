import * as actions from './tabs-actions';

describe('Visualization tab actions', () => {
  it('should dispatch an action to change active snapshot', () => {
    const expectedAction = {
      name: 'snapshot-1',
      type: actions.CHANGE_ACTIVE_SNAPSHOT,
    };
    expect(actions.changeActiveSnapshot('snapshot-1')).toEqual(expectedAction);
  });
});

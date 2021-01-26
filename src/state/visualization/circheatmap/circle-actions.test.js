import * as actions from './circle-actions';

describe('Circle actions', () => {
  it('should dispatch an action to update the order', () => {
    const newOrder = [2, 1, 0];
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      order: newOrder,
      type: actions.UPDATE_CIRCLE_ORDER,
    };
    expect(actions.updateCircleOrder(newOrder)).toEqual(expectedAction);
  });

  it('should dispatch an action to update a cirles setting', () => {
    const newSetting = { index: 1, attribute: 'color', value: 'red' };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.UPDATE_CIRCLE_SETTING,
      ...newSetting,
    };
    expect(actions.updateCircleSetting(newSetting)).toEqual(expectedAction);
  });
});

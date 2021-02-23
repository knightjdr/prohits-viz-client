import * as actions from './circle-actions';

describe('Circle actions', () => {
  it('should dispatch an action to update the order', () => {
    const action = {
      key: 'order',
      order: [2, 1, 0],
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.UPDATE_CIRCLE_ORDER,
      ...action,
    };
    expect(actions.updateCircleOrder(action)).toEqual(expectedAction);
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

  it('should dispatch an action to update circle visibility', () => {
    const newOrder = {
      hidden: [3, 1],
      order: [0, 2],
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.UPDATE_CIRCLE_VISIBILITY,
      ...newOrder,
    };
    expect(actions.updateCircleVisibility(newOrder)).toEqual(expectedAction);
  });
});

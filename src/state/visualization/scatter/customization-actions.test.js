import * as actions from './customization-actions';

describe('Customization actions', () => {
  it('should dispatch an action to add points', () => {
    const points = {
      labelA: { color: '#ff0000', radius: 5 },
      labelB: { color: '#ff0000', radius: 5 },
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      points,
      type: actions.ADD_POINTS,
    };
    expect(actions.addPoints(points)).toEqual(expectedAction);
  });

  it('should dispatch an action to delete all points', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.DELETE_ALL_POINTS,
    };
    expect(actions.deleteAllPoints()).toEqual(expectedAction);
  });

  it('should dispatch an action to delete a point', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      type: actions.DELETE_POINT,
    };
    expect(actions.deletePoint('labelA')).toEqual(expectedAction);
  });

  it('should dispatch an action to update a point', () => {
    const parameters = {
      color: '#ff0000',
      radius: 5,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      parameters,
      type: actions.UPDATE_POINT,
    };
    expect(actions.updatePoint('labelA', parameters)).toEqual(expectedAction);
  });

  it('should dispatch an action to update a setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'color',
      type: actions.UPDATE_CUSTOMIZATION_SETTING,
      value: '#00ffff',
    };
    expect(actions.updateCustomizationSetting('color', '#00ffff')).toEqual(expectedAction);
  });
});

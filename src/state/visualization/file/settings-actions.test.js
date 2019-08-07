import * as actions from './settings-actions';

describe('Visualization settings set actions', () => {
  it('should dispatch an action to update a setting', () => {
    const expectedAction = {
      setting: 'a',
      type: actions.UPDATE_SETTING,
      value: 'b',
    };
    expect(actions.updateSetting('a', 'b')).toEqual(expectedAction);
  });

  it('should dispatch an action to reset settings', () => {
    const expectedAction = {
      type: actions.RESET_SETTINGS,
    };
    expect(actions.resetSettings()).toEqual(expectedAction);
  });
});

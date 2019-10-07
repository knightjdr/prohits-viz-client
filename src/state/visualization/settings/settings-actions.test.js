import * as actions from './settings-actions';

describe('Visualization settings actions', () => {
  it('should dispatch an action to update a setting', () => {
    const expectedAction = {
      dataID: 'main',
      setting: 'a',
      type: actions.UPDATE_SETTING,
      value: 'b',
    };
    expect(actions.updateSetting('main', 'a', 'b')).toEqual(expectedAction);
  });

  it('should dispatch an action to reset settings', () => {
    const expectedAction = {
      dataID: 'main',
      type: actions.RESET_SETTINGS,
    };
    expect(actions.resetSettings('main')).toEqual(expectedAction);
  });
});

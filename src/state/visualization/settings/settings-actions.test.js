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

  it('should dispatch an action to update multiple settings', () => {
    const settings = {
      a: 1,
      b: 2,
    };
    const expectedAction = {
      dataID: 'main',
      settings,
      type: actions.UPDATE_SETTINGS,
    };
    expect(actions.updateSettings('main', settings)).toEqual(expectedAction);
  });
});

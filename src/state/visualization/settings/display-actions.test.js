import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to reset the image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_IMAGE,
    };
    expect(actions.resetImage()).toEqual(expectedAction);
  });

  it('should dispatch an action to update a display setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'plotFixed',
      type: actions.UPDATE_DISPLAY_SETTING,
      value: true,
    };
    expect(actions.updateDisplaySetting('plotFixed', true)).toEqual(expectedAction);
  });
});

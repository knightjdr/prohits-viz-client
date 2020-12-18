import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to reset heatmap image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_HEATMAP,
    };
    expect(actions.resetHeatmap()).toEqual(expectedAction);
  });

  it('should dispatch an action to reset scatter image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCATTER,
      value: {},
    };
    expect(actions.resetScatter({})).toEqual(expectedAction);
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

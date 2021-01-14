import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to change plot', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'selectedPlot',
      type: actions.CHANGE_PLOT,
      value: 2,
    };
    expect(actions.changePlot(2)).toEqual(expectedAction);
  });

  it('should dispatch an action to reset heatmap image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_HEATMAP,
    };
    expect(actions.resetHeatmap()).toEqual(expectedAction);
  });

  it('should dispatch an action to reset scatter', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCATTER,
      value: {},
    };
    expect(actions.resetScatter({})).toEqual(expectedAction);
  });

  it('should dispatch an action to reset scatter transformations', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCATTER_TRANSFORMATIONS,
      value: {},
    };
    expect(actions.resetScatterTransformations({})).toEqual(expectedAction);
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

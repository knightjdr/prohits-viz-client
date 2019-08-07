import * as actions from './panel-actions';

describe('Visualization panel set actions', () => {
  it('should dispatch an action to change panel tab', () => {
    const expectedAction = {
      tab: 'map',
      type: actions.CHANGE_PANEL_TAB,
    };
    expect(actions.changePanelTab('map')).toEqual(expectedAction);
  });

  it('should dispatch an action to toggle the panel', () => {
    const expectedAction = {
      type: actions.TOGGLE_PANEL,
    };
    expect(actions.togglePanel()).toEqual(expectedAction);
  });
});

import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to fix the plot', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      fixed: true,
      type: actions.FIX_PLOT,
    };
    expect(actions.fixPlot(true)).toEqual(expectedAction);
  });

  it('should dispatch an action to reset the image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      type: actions.RESET_IMAGE,
    };
    expect(actions.resetImage()).toEqual(expectedAction);
  });
});

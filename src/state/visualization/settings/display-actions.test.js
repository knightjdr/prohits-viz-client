import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to fix the plot', () => {
    const expectedAction = {
      dataID: 1,
      fixed: true,
      type: actions.FIX_PLOT,
    };
    expect(actions.fixPlot(1, true)).toEqual(expectedAction);
  });

  it('should dispatch an action to reset the image', () => {
    const expectedAction = {
      dataID: 1,
      type: actions.RESET_IMAGE,
    };
    expect(actions.resetImage(1)).toEqual(expectedAction);
  });
});

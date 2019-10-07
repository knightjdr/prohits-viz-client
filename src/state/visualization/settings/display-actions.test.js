import * as actions from './display-actions';

describe('Display actions', () => {
  it('should dispatch an action to reset the image', () => {
    const expectedAction = {
      dataID: 1,
      type: actions.RESET_IMAGE,
    };
    expect(actions.resetImage(1)).toEqual(expectedAction);
  });

  it('should dispatch an action to update plot position', () => {
    const expectedAction = {
      dataID: 1,
      fixed: true,
      translate: -200,
      type: actions.UPDATE_PLOT_POSITION,
    };
    expect(actions.updatePlotPosition(1, true, -200)).toEqual(expectedAction);
  });
});

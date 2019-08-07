import * as actions from './plot-actions';

describe('Plot actions', () => {
  it('should dispatch an action to change plot', () => {
    const expectedAction = {
      plot: 1,
      type: actions.CHANGE_PLOT,
    };
    expect(actions.changePlot(1)).toEqual(expectedAction);
  });
});

import * as actions from './dimension-actions';

describe('Dimension actions', () => {
  it('should dispatch an action to set the image dimensions', () => {
    const dimensions = {
      columns: 30,
      height: 500,
      pageX: 20,
      pageY: 15,
      rows: 30,
      width: 500,
      wrapperHeight: 600,
      wrapperWidth: 600,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      dimensions,
      type: actions.SET_DIMENSIONS,
    };
    expect(actions.setDimensions(dimensions)).toEqual(expectedAction);
  });
});

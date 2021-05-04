import * as actions from './dimension-actions';

describe('Dimension actions', () => {
  it('should dispatch an action to reset scroll', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCROLL,
    };
    expect(actions.resetScroll()).toEqual(expectedAction);
  });

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
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      dimensions,
      type: actions.SET_DIMENSIONS,
    };
    expect(actions.setDimensions(dimensions)).toEqual(expectedAction);
  });

  it('should dispatch an action to update a dimension', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      dimension: 'scrollTop',
      type: actions.UPDATE_DIMENSION,
      value: 50,
    };
    expect(actions.updateDimension('scrollTop', 50)).toEqual(expectedAction);
  });

  it('should dispatch an action to update multiple dimensions', () => {
    const dimensions = {
      scrollLeft: 30,
      scrollTop: 50,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      dimensions,
      type: actions.UPDATE_DIMENSIONS,
    };
    expect(actions.updateDimensions(dimensions)).toEqual(expectedAction);
  });
});

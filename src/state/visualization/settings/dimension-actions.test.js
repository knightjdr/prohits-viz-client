import * as actions from './dimension-actions';

describe('Dimesion actions', () => {
  it('should dispatch an action to set the image dimensions', () => {
    const expectedAction = {
      columns: 30,
      dataID: 'main',
      height: 500,
      pageX: 20,
      pageY: 15,
      rows: 30,
      type: actions.SET_DIMENSIONS,
      width: 500,
    };
    expect(actions.setDimensions('main', 30, 30, 20, 15, 500, 500)).toEqual(expectedAction);
  });
});

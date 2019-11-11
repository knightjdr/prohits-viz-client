import * as actions from './position-actions';

describe('Position actions', () => {
  it('should dispatch an action to update the image position', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.UPDATE_POSITION,
      x: 0.5,
      y: 0.3,
    };
    expect(actions.updatePosition(0.5, 0.3)).toEqual(expectedAction);
  });
});

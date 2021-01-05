import * as actions from './customization-actions';

describe('Customization actions', () => {
  it('should dispatch an action to delete all points', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.DELETE_ALL_POINTS,
    };
    expect(actions.deleteAllPoints()).toEqual(expectedAction);
  });

  it('should dispatch an action to delete a point', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      type: actions.DELETE_POINT,
    };
    expect(actions.deletePoint('labelA')).toEqual(expectedAction);
  });

  it('should dispatch an action to update a point', () => {
    const parameters = {
      color: '#ff0000',
      radius: 5,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      parameters,
      type: actions.UPDATE_POINT,
    };
    expect(actions.updatePoint('labelA', parameters)).toEqual(expectedAction);
  });
});

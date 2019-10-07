import * as actions from './columns-actions';

describe('Visualization column actions', () => {
  it('should dispatch an action to set the reference', () => {
    const expectedAction = {
      dataID: 1,
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    expect(actions.setReference(1, 'a')).toEqual(expectedAction);
  });
});

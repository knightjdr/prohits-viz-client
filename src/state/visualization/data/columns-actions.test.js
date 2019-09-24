import * as actions from './columns-actions';

describe('Visualization column actions', () => {
  it('should dispatch an action to set the reference', () => {
    const expectedAction = {
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    expect(actions.setReference('a')).toEqual(expectedAction);
  });
});

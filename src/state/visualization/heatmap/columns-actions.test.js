import * as actions from './columns-actions';

describe('Column actions', () => {
  it('should dispatch an action to delete a column', () => {
    const index = 1;
    const order = [0, 1];
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      index: 1,
      order,
      type: actions.DELETE_COLUMN,
    };
    expect(actions.deleteColumn(index, order)).toEqual(expectedAction);
  });

  it('should dispatch an action to set the filter order', () => {
    const order = [0, 1];
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      order,
      type: actions.SET_COLUMN_ORDER,
    };
    expect(actions.setColumnOrder(order)).toEqual(expectedAction);
  });

  it('should dispatch an action to set the reference', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    expect(actions.setReference('a')).toEqual(expectedAction);
  });
});

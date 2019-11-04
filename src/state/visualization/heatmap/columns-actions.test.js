import * as actions from './columns-actions';

describe('Column actions', () => {
  it('should dispatch an action to set the filter order', () => {
    const order = [0, 1];
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      order,
      type: actions.SET_COLUMN_FILTER_ORDER,
    };
    expect(actions.setColumnFilterOrder(order)).toEqual(expectedAction);
  });

  it('should dispatch an action to set the reference', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      ref: 'a',
      type: actions.SET_COLUMN_REFERENCE,
    };
    expect(actions.setReference('a')).toEqual(expectedAction);
  });
});

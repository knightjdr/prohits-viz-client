import * as actions from './rows-actions';

describe('Row actions', () => {
  it('should dispatch an action to delete a row', () => {
    const index = 1;
    const order = [0, 1];
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      index,
      order,
      type: actions.DELETE_ROW,
    };
    expect(actions.deleteRow(index, order)).toEqual(expectedAction);
  });

  it('should dispatch an action to set row filter order', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      order: ['b', 'c', 'a'],
      type: actions.SET_ROW_ORDER,
    };
    expect(actions.setRowOrder(['b', 'c', 'a'])).toEqual(expectedAction);
  });

  it('should dispatch an action to update the rows', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      direction: 'asc',
      order: ['b', 'c', 'a'],
      sortBy: 'c',
      type: actions.SORT_ROWS,
    };
    expect(actions.sortRows('asc', ['b', 'c', 'a'], 'c')).toEqual(expectedAction);
  });
});

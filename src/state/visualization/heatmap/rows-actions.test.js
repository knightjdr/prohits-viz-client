import * as actions from './rows-actions';

describe('Row actions', () => {
  it('should dispatch an action to filter the rows', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      rowOrder: ['b', 'c', 'a'],
      type: actions.FILTER_ROWS,
    };
    expect(actions.filterRows(['b', 'c', 'a'])).toEqual(expectedAction);
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

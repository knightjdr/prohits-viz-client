import * as actions from './rows-actions';

describe('Row actions', () => {
  it('should dispatch an action to filter the rows', () => {
    const expectedAction = {
      dataID: 'main',
      rowOrder: ['b', 'c', 'a'],
      type: actions.FILTER_ROWS,
    };
    expect(actions.filterRows('main', ['b', 'c', 'a'])).toEqual(expectedAction);
  });

  it('should dispatch an action to update the rows', () => {
    const expectedAction = {
      dataID: 'main',
      direction: 'asc',
      order: ['b', 'c', 'a'],
      sortBy: 'c',
      type: actions.SORT_ROWS,
    };
    expect(actions.sortRows('main', 'asc', ['b', 'c', 'a'], 'c')).toEqual(expectedAction);
  });
});

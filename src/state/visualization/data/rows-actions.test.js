import * as actions from './rows-actions';

describe('Row actions', () => {
  it('should dispatch an action to update the rows', () => {
    const expectedAction = {
      direction: 'asc',
      order: ['b', 'c', 'a'],
      sortBy: 0,
      type: actions.UPDATE_ROWS,
    };
    expect(actions.updateRows('asc', ['b', 'c', 'a'], 0)).toEqual(expectedAction);
  });
});

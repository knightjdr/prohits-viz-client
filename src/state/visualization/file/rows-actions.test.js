import * as actions from './rows-actions';

const list = [
  { data: [{ value: 1 }, { value: 4 }], name: 'a' },
  { data: [{ value: 5 }, { value: 2 }], name: 'b' },
  { data: [{ value: 2 }, { value: 3 }], name: 'c' },
];


describe('Row actions', () => {
  it('should dispatch an action to restore the rows', () => {
    const rows = {
      list: ['a', 'b', 'c'],
      map: { a: 0, b: 1, c: 2 },
    };
    const expectedAction = {
      direction: 'asc',
      list,
      rows,
      sortBy: 0,
      type: actions.RESTORE_ROWS,
    };
    expect(actions.restoreRows('asc', list, 0, rows)).toEqual(expectedAction);
  });

  it('should dispatch an action to update the rows', () => {
    const rows = {
      list: ['a', 'b', 'c'],
      map: { a: 0, b: 1, c: 2 },
    };
    const expectedAction = {
      direction: 'asc',
      list,
      rows,
      sortBy: 0,
      type: actions.UPDATE_ROWS,
    };
    expect(actions.updateRows('asc', list, 0, rows)).toEqual(expectedAction);
  });
});

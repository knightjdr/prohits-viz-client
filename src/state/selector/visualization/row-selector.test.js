import { selectRowNames, selectRows } from './row-selector';

const state = {
  rowDB: [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
  ],
  rows: {
    main: {
      order: [2, 1],
    },
  },
  tabs: {
    active: 'main',
  },
};

describe('Row selector for heat map', () => {
  it('should return rows from DB in correct order', () => {
    const expected = [
      { name: 'c' },
      { name: 'b' },
    ];
    expect(selectRows(state)).toEqual(expected);
  });

  it('should return rows names in correct order', () => {
    const expected = ['c', 'b'];
    expect(selectRowNames(state)).toEqual(expected);
  });
});

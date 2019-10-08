import selectColumns from './column-selector';

const state = {
  columnDB: ['a', 'b', 'c'],
  columns: {
    main: {
      order: [2, 0, 1],
    },
  },
  tabs: {
    active: 'main',
  },
};

describe('Column selector for heat map', () => {
  it('should return column names in order', () => {
    const expected = ['c', 'a', 'b'];
    expect(selectColumns(state)).toEqual(expected);
  });
});

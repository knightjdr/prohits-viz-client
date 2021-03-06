import { selectColumnNames, selectOrderedColumnNames, selectVisibleColumnNames } from './column-selector';

const state = {
  columnDB: ['a', 'b', 'c', 'd'],
  columns: {
    main: {
      order: [2, 0, 1, 3],
    },
  },
  dimensions: {
    main: {
      pageX: 2,
    },
  },
  position: {
    main: {
      x: 1,
    },
  },
  tabs: {
    activeSnapshot: 'main',
  },
};

describe('Column selector for heat map', () => {
  it('should return column names in default order', () => {
    const expected = ['a', 'b', 'c', 'd'];
    expect(selectColumnNames(state)).toEqual(expected);
  });

  it('should return column names in order', () => {
    const expected = ['c', 'a', 'b', 'd'];
    expect(selectOrderedColumnNames(state)).toEqual(expected);
  });

  it('should return column names and indices in order', () => {
    const expected = ['a', 'b'];
    expect(selectVisibleColumnNames(state)).toEqual(expected);
  });
});

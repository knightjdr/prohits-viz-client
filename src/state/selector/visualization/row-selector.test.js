import { selectOrderedRowNames, selectRowNames, selectVisibleRowNames } from './row-selector';

const state = {
  dimensions: {
    main: {
      pageY: 2,
    },
  },
  rowDB: [
    {
      data: [{ value: 1 }, { value: 2 }, { value: 3 }],
      name: 'a',
    },
    {
      data: [{ value: 1 }, { value: 2 }, { value: 3 }],
      name: 'b',
    },
    {
      data: [{ value: 1 }, { value: 2 }, { value: 3 }],
      name: 'c',
    },
    {
      data: [{ value: 1 }, { value: 2 }, { value: 3 }],
      name: 'd',
    },
  ],
  position: {
    main: {
      y: 1,
    },
  },
  rows: {
    main: {
      defaultOrder: [0, 1, 2, 3],
      order: [0, 2, 1, 3],
    },
  },
  tabs: {
    active: 'main',
  },
};

describe('Row selector for heat map', () => {
  it('should return rows names in default order', () => {
    const expected = ['a', 'b', 'c', 'd'];
    expect(selectRowNames(state)).toEqual(expected);
  });

  it('should return rows names in correct order', () => {
    const expected = ['a', 'c', 'b', 'd'];
    expect(selectOrderedRowNames(state)).toEqual(expected);
  });

  it('should return rows names for visible page', () => {
    const expected = ['c', 'b'];
    expect(selectVisibleRowNames(state)).toEqual(expected);
  });
});

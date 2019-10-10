import selectRowNames from './row-selector';

const state = {
  columns: {
    main: {
      order: [0, 2],
    },
  },
  rowDB: [
    {
      data: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
      ],
      name: 'a',
    },
    {
      data: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
      ],
      name: 'b',
    },
    {
      data: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
      ],
      name: 'c',
    },
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
  it('should return rows names in correct order', () => {
    const expected = ['c', 'b'];
    expect(selectRowNames(state)).toEqual(expected);
  });
});

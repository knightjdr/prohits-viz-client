import fillRows, { defaultState } from './rows';

describe('Fill rows', () => {
  it('should return user options when valid', () => {
    const rows = {
      defaultOrder: [0, 1, 2],
      direction: 'asc',
      list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
      order: [1, 2, 0],
      sortBy: 1,
    };
    const expected = rows;
    expect(fillRows(rows)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const rows = {
      defaultOrder: {},
      direction: 'other',
      list: {},
      order: {},
      sortBy: 'a',
    };
    const expected = defaultState;
    expect(fillRows(rows)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const rows = {};
    const expected = defaultState;
    expect(fillRows(rows)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = defaultState;
    expect(fillRows(undefined)).toEqual(expected);
  });

  describe('list order', () => {
    it('should define order from list when order properties are not an array', () => {
      const user = {
        defaultOrder: {},
        direction: 'asc',
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: {},
        sortBy: 1,
      };
      const expected = {
        ...user,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      };
      expect(fillRows(user)).toEqual(expected);
    });

    it('should define default order from list when order contains values not in list', () => {
      const user = {
        defaultOrder: [0, 1, 3],
        direction: 'asc',
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: [0, 1, 2],
        sortBy: 1,
      };
      const expected = {
        ...user,
        defaultOrder: [0, 1, 2],
      };
      expect(fillRows(user)).toEqual(expected);
    });

    it('should define order from list when order contains values not in list', () => {
      const user = {
        defaultOrder: [0, 1, 2],
        direction: 'asc',
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: [0, 3],
        sortBy: 1,
      };
      const expected = {
        ...user,
        order: [0, 1, 2],
      };
      expect(fillRows(user)).toEqual(expected);
    });

    it('should define order from list when order is empty', () => {
      const user = {
        defaultOrder: [0, 1, 2],
        direction: 'asc',
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: [],
        sortBy: 1,
      };
      const expected = {
        ...user,
        order: [0, 1, 2],
      };
      expect(fillRows(user)).toEqual(expected);
    });
  });

  it('should return default when sortby value is not within list length', () => {
    const user = {
      defaultOrder: [0, 1, 2],
      direction: 'asc',
      list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
      order: [0, 1, 2],
      sortBy: 3,
    };
    const expected = {
      ...user,
      sortBy: null,
    };
    expect(fillRows(user)).toEqual(expected);
  });
});

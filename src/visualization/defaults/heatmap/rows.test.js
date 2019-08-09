import fillRows, { defaultState } from './rows';

describe('Fill rows', () => {
  it('should return user options when valid', () => {
    const rows = {
      direction: 'asc',
      id: 1,
      list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
      order: ['a', 'b', 'c'],
      sortBy: 1,
    };
    const expected = rows;
    expect(fillRows(rows)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const rows = {
      direction: 'other',
      id: 'a',
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
    it('should define order from list when order is not an array', () => {
      const user = {
        direction: 'asc',
        id: 1,
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: {},
        sortBy: 1,
      };
      const expected = {
        ...user,
        order: ['a', 'b', 'c'],
      };
      expect(fillRows(user)).toEqual(expected);
    });

    it('should define order from list when order contains values not in list', () => {
      const user = {
        direction: 'asc',
        id: 1,
        list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
        order: ['a', 'b', 'd'],
        sortBy: 1,
      };
      const expected = {
        ...user,
        order: ['a', 'b', 'c'],
      };
      expect(fillRows(user)).toEqual(expected);
    });
  });

  it('should return default when sortby value is not within list length', () => {
    const user = {
      direction: 'asc',
      id: 1,
      list: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
      order: ['a', 'b', 'c'],
      sortBy: 3,
    };
    const expected = {
      ...user,
      sortBy: null,
    };
    expect(fillRows(user)).toEqual(expected);
  });
});

import fillRows, { defaultState } from './rows';

const userRowDB = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

describe('Fill rows', () => {
  it('should return user-defined rows when valid', () => {
    const userRows = {
      main: {
        defaultOrder: [0, 1, 2],
        direction: 'asc',
        filterOrder: [1, 2],
        order: [2, 1],
        sortBy: 'a',
        sortOrder: [2, 1],
      },
    };
    const expected = userRows;
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when user-defined row selection has invalid values', () => {
    const userRows = {
      main: {
        defaultOrder: {},
        filterOrder: {},
        direction: 'other',
        order: {},
        sortBy: 1,
        sortOrder: {},
      },
    };
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userRows = {};
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when user-defined rows are not an object', () => {
    const userRows = [];
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when user-defined rows undefined', () => {
    const userRows = undefined;
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [0, 1, 2],
        order: [0, 1, 2],
      },
    };
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  describe('row order', () => {
    it('should define default order from rowDB when order contains values not in DB', () => {
      const userRows = {
        main: {
          defaultOrder: [0, 1, 3],
          direction: 'asc',
          order: [0, 1, 2],
          sortBy: 'a',
        },
      };
      const expected = {
        main: {
          ...defaultState,
          ...userRows.main,
          defaultOrder: [0, 1, 2],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });

    it('should define order from DB when order contains values not in DB', () => {
      const userRows = {
        main: {
          defaultOrder: [0, 1, 2],
          direction: 'asc',
          order: [0, 3],
          sortBy: 'a',
        },
      };
      const expected = {
        main: {
          ...defaultState,
          ...userRows.main,
          order: [0, 1, 2],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });

    it('should define order from DB when order is empty', () => {
      const userRows = {
        main: {
          defaultOrder: [0, 1, 2],
          direction: 'asc',
          order: [],
          sortBy: 'a',
        },
      };
      const expected = {
        main: {
          ...defaultState,
          ...userRows.main,
          order: [0, 1, 2],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });

    it('should define filterOrder as empty array when order contains values not in DB', () => {
      const userRows = {
        main: {
          defaultOrder: [0, 1, 2],
          direction: 'asc',
          filterOrder: [0, 3],
          order: [0, 1, 2],
          sortBy: 'a',
        },
      };
      const expected = {
        main: {
          ...defaultState,
          ...userRows.main,
          filterOrder: [],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });

    it('should define sortOrder as empty array when order contains values not in DB', () => {
      const userRows = {
        main: {
          defaultOrder: [0, 1, 2],
          direction: 'asc',
          order: [0, 1, 2],
          sortBy: 'a',
          sortOrder: [0, 3],
        },
      };
      const expected = {
        main: {
          ...defaultState,
          ...userRows.main,
          sortOrder: [],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });
  });
});

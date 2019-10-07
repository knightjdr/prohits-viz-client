import fillRows, { defaultState } from './rows';

const userRowDB = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

describe('Fill rows', () => {
  it('should return user-defined rows when valid', () => {
    const userRows = {
      main: {
        defaultOrder: [0, 1, 2],
        direction: 'asc',
        order: [1, 2, 0],
        sortBy: 1,
      },
    };
    const expected = userRows;
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when user-defined row selection has invalid values', () => {
    const userRows = {
      main: {
        defaultOrder: {},
        direction: 'other',
        order: {},
        sortBy: 'a',
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
          sortBy: 1,
        },
      };
      const expected = {
        main: {
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
          sortBy: 1,
        },
      };
      const expected = {
        main: {
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
          sortBy: 1,
        },
      };
      const expected = {
        main: {
          ...userRows.main,
          order: [0, 1, 2],
        },
      };
      expect(fillRows(userRows, userRowDB)).toEqual(expected);
    });
  });

  it('should return default when sortby value is not within list length', () => {
    const userRows = {
      main: {
        defaultOrder: [0, 1, 2],
        direction: 'asc',
        order: [0, 1, 2],
        sortBy: 3,
      },
    };
    const expected = {
      main: {
        ...userRows.main,
        sortBy: null,
      },
    };
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });
});

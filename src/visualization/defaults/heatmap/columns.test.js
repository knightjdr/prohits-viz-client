import fillColumns from './columns';

const userColumnsDB = ['a', 'b', 'c'];

describe('Fill columns', () => {
  it('should return user-defined columns when valid', () => {
    const userColumns = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [1, 2],
        order: [1, 2, 0],
        ref: 'a',
        sortOrder: [2, 1],
      },
    };
    const expected = userColumns;
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined column selection has invalid values', () => {
    const userColumns = {
      main: {
        defaultOrder: {},
        filterOrder: {},
        order: {},
        ref: 5,
        sortOrder: {},
      },
    };
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [],
        order: [0, 1, 2],
        ref: null,
        sortOrder: [],
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userColumns = {};
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [],
        order: [0, 1, 2],
        ref: null,
        sortOrder: [],
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined columns are not an object', () => {
    const userColumns = [];
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [],
        order: [0, 1, 2],
        ref: null,
        sortOrder: [],
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined columns undefined', () => {
    const userColumns = undefined;
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [],
        order: [0, 1, 2],
        ref: null,
        sortOrder: [],
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return null for ref when not in names array', () => {
    const userColumns = {
      main: {
        defaultOrder: [0, 1, 2],
        filterOrder: [],
        order: [1, 2, 0],
        ref: 'd',
        sortOrder: [],
      },
    };
    const result = fillColumns(userColumns, userColumnsDB);
    expect(result.main.ref).toBeNull();
  });
});

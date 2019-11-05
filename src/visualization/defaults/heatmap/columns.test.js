import fillColumns from './columns';

const userColumnsDB = ['a', 'b', 'c'];

describe('Fill columns', () => {
  it('should return user-defined columns when valid', () => {
    const userColumns = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [0],
        order: [1, 2],
        ref: 'a',
      },
    };
    const expected = userColumns;
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined column selection has invalid values', () => {
    const userColumns = {
      main: {
        defaultOrder: {},
        deleted: {},
        order: {},
        ref: 5,
      },
    };
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [],
        order: [0, 1, 2],
        ref: null,
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userColumns = {};
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [],
        order: [0, 1, 2],
        ref: null,
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined columns are not an object', () => {
    const userColumns = [];
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [],
        order: [0, 1, 2],
        ref: null,
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });

  it('should return defaults when user-defined columns undefined', () => {
    const userColumns = undefined;
    const expected = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [],
        order: [0, 1, 2],
        ref: null,
      },
    };
    expect(fillColumns(userColumns, userColumnsDB)).toEqual(expected);
  });
});

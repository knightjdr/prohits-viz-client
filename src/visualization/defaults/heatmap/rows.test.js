import fillRows, { defaultState } from './rows';

const userRowDB = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

describe('Fill rows', () => {
  it('should return user-defined rows when valid', () => {
    const userRows = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [0],
        direction: 'asc',
        order: [2, 1],
        sortBy: 'a',
      },
    };
    const expected = userRows;
    expect(fillRows(userRows, userRowDB)).toEqual(expected);
  });

  it('should return defaults when user-defined row selection has invalid values', () => {
    const userRows = {
      main: {
        defaultOrder: {},
        deleted: {},
        direction: 'other',
        order: {},
        sortBy: 1,
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
});

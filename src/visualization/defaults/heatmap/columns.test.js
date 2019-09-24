import fillColumns from './columns';

describe('Fill columns', () => {
  it('should return user options when valid', () => {
    const user = {
      defaultOrder: [0, 1, 2],
      names: ['a', 'b', 'c'],
      order: [1, 2, 0],
      ref: 'a',
    };
    const expected = user;
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const user = {
      defaultOrder: {},
      names: { a: true, b: true },
      order: {},
      ref: 5,
    };
    const expected = {
      defaultOrder: [],
      names: [],
      order: [],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const user = {};
    const expected = {
      defaultOrder: [],
      names: [],
      order: [],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      defaultOrder: [],
      names: [],
      order: [],
      ref: null,
    };
    expect(fillColumns(undefined)).toEqual(expected);
  });

  it('should return null for ref when not in names array', () => {
    const user = {
      defaultOrder: [0, 1, 2],
      names: ['a', 'b', 'c'],
      order: [0, 1, 2],
      ref: 'd',
    };
    const expected = {
      defaultOrder: [0, 1, 2],
      names: ['a', 'b', 'c'],
      order: [0, 1, 2],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });
});

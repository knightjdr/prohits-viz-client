import fillColumns from './columns';

describe('Fill columns', () => {
  it('should return user options when valid', () => {
    const user = {
      names: ['a', 'b', 'c'],
      ref: 'a',
    };
    const expected = user;
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const user = {
      names: { a: true, b: true },
      ref: 5,
    };
    const expected = {
      names: [],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const user = {};
    const expected = {
      names: [],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      names: [],
      ref: null,
    };
    expect(fillColumns(undefined)).toEqual(expected);
  });

  it('should return null for ref when not in names array', () => {
    const user = {
      names: ['a', 'b', 'c'],
      ref: 'd',
    };
    const expected = {
      names: ['a', 'b', 'c'],
      ref: null,
    };
    expect(fillColumns(user)).toEqual(expected);
  });
});

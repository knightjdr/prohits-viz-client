import subsetObject from './subset-object';

describe('Subset object', () => {
  it('should return a new object with desired keys', () => {
    const obj = { a: 1, b: 2, c: 'a' };
    const expected = { b: 2, c: 'a' };
    expect(subsetObject(obj, ['b', 'c'])).toEqual(expected);
  });

  it('should omit keys that are not present in source', () => {
    const obj = { a: 1, b: 2, c: 'a' };
    const expected = { b: 2, c: 'a' };
    expect(subsetObject(obj, ['b', 'c', 'd'])).toEqual(expected);
  });
});

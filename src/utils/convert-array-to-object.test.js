import convertArrayToObject from './convert-array-to-object';

describe('Convert array to object', () => {
  it('should convert an array to an object with indices as values', () => {
    const arr = ['a', 'b', 'c'];
    const expected = { a: 0, b: 1, c: 2 };
    expect(convertArrayToObject(arr)).toEqual(expected);
  });
});

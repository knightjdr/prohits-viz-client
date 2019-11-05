import convertArrayToObject from './convert-array-to-object';

describe('Convert array to object', () => {
  it('should convert an array to an object', () => {
    const arr = ['a', 'b', 'c'];
    const expected = { a: true, b: true, c: true };
    expect(convertArrayToObject(arr)).toEqual(expected);
  });
});

import mapArr from './map-array';

describe('Map array', () => {
  it('should map an array to an object with indices as values', () => {
    const arr = ['a', 'b', 'c'];
    const expected = { a: 0, b: 1, c: 2 };
    expect(mapArr(arr)).toEqual(expected);
  });
});

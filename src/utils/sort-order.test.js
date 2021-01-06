import sortOrder from './sort-order';

describe('Array sort order', () => {
  it('should return indices of sorted array relative to original element order', () => {
    const arr = ['b', 'a', 'd', 'e', 'c'];
    const expected = [1, 0, 4, 2, 3];
    expect(sortOrder(arr)).toEqual(expected);
  });

  it('should return indices and sorted array', () => {
    const arr = ['b', 'a', 'd', 'e', 'c'];
    const expected = [
      [1, 0, 4, 2, 3],
      ['a', 'b', 'c', 'd', 'e'],
    ];
    expect(sortOrder(arr, true)).toEqual(expected);
  });
});

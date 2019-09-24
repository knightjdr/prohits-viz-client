import arrayOrderBy from './array-order-by';

describe('Array order by', () => {
  it('should order first array by indices of the second', () => {
    const arr1 = ['a', 'b', 'c', 'd'];
    const arr2 = [2, 0, 3];
    const expected = ['c', 'a', 'd'];
    expect(arrayOrderBy(arr1, arr2)).toEqual(expected);
  });
});

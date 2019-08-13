import ArrayContains from './array-contains';

describe('Array contains', () => {
  it('should return true if the first array contains the second', () => {
    expect(ArrayContains(['a', 'b', 'c', 'd'], ['a', 'b'])).toBeTruthy();
    expect(ArrayContains(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'])).toBeTruthy();
    expect(ArrayContains(['a', 'b', 'c', 'd'], [])).toBeTruthy();
  });

  it('should return false if the first array does not contain the second', () => {
    expect(ArrayContains(['a', 'b', 'c', 'd'], ['a', 'b', 'e'])).toBeFalsy();
    expect(ArrayContains(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e'])).toBeFalsy();
    expect(ArrayContains(['a', 'b', 'c', 'd'], ['e'])).toBeFalsy();
  });
});

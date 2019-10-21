import isSubset from './is-subset';

describe('Does an array contain all items of another array', () => {
  it('should return true if the first array contains the second', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const tests = [
      ['a', 'b'],
      ['a', 'b', 'c', 'd'],
      [],
    ];
    tests.forEach((test) => {
      expect(isSubset(arr, test)).toBeTruthy();
    });
  });

  it('should return false if the first array does not contain the second', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const tests = [
      ['a', 'b', 'e'],
      ['a', 'b', 'c', 'd', 'e'],
      ['e'],
    ];
    tests.forEach((test) => {
      expect(isSubset(arr, test)).toBeFalsy();
    });
  });
});

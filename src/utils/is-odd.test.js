import isOdd from './is-odd';

describe('Is a number odd', () => {
  it('should return true for odd numbers', () => {
    const tests = [-1, 1, 9, 37];
    tests.forEach((test) => {
      expect(isOdd(test)).toBeTruthy();
    });
  });

  it('should return false for even numbers', () => {
    const tests = [-2, 0, 2, 36];
    tests.forEach((test) => {
      expect(isOdd(test)).toBeFalsy();
    });
  });
});

import { sortByNumber, sortBySciNotation, sortByString } from './sort';

describe('Sort functions', () => {
  it('should sort by number', () => {
    const tests = [
      { a: 1, b: 2, expected: -1 },
      { a: 2, b: 1, expected: 1 },
      { a: 1, b: 1, expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sortByNumber(test.a, test.b)).toBe(test.expected);
    });
  });

  it('should sort by scientific notation', () => {
    const tests = [
      { a: '1.00e-1', b: '2.00e-1', expected: -0.1 },
      { a: '2.00e-1', b: '1.00e-1', expected: 0.1 },
      { a: '1.00e-1', b: '1.00e-1', expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sortBySciNotation(test.a, test.b)).toBe(test.expected);
    });
  });

  it('should sort by number', () => {
    const tests = [
      { a: 'a', b: 'b', expected: -1 },
      { a: 'b', b: 'a', expected: 1 },
      { a: 'a', b: 'a', expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sortByString(test.a, test.b)).toBe(test.expected);
    });
  });
});

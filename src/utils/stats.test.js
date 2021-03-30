import stats from './stats';

describe('Statistic function', () => {
  describe('mean', () => {
    it('should return mean', () => {
      const tests = [
        [7, 6, 3, 9, 11],
        [7, 6, 3, 9, 0],
      ];
      const expected = [7.2, 5];
      tests.forEach((test, index) => {
        expect(stats.mean(test)).toBe(expected[index]);
      });
    });

    it('should convert string values', () => {
      const arr = [7, 6, 3, 9, '11'];
      const expected = 7.2;
      expect(stats.mean(arr)).toBe(expected);
    });

    it('should ignore values that cannot be converted to numbers', () => {
      const arr = [7, 6, 3, 9, undefined];
      const expected = 6.25;
      expect(stats.mean(arr)).toBe(expected);
    });

    it('should return zero for empty array', () => {
      const arr = [];
      const expected = 0;
      expect(stats.mean(arr)).toBe(expected);
    });
  });
});

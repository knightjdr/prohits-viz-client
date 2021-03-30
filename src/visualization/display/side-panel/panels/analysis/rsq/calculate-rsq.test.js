import calculateRSQ from './calculate-rsq';

describe('Calculate RSQ', () => {
  it('should calculate RSQ', () => {
    const tests = [
      {
        x: [0.25, 5, 1, 3, 8],
        y: [0.5, 10, 2, 6, 16],
      },
      {
        x: [1, 5, 1, 10],
        y: [10, 2, 10, 1],
      },
      {
        x: [0.25, 5, 1, 3, 8],
        y: [8, 4, 9, 0.33, 7],
      },
      {
        x: [2, 2, 2],
        y: [0, 0, 2],
      },
    ];
    const expected = [1, 0.837, 0.048, 0];
    tests.forEach((test, index) => {
      expect(calculateRSQ(test.x, test.y)).toBeCloseTo(expected[index], 3);
    });
  });
});

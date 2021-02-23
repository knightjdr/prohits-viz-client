import percentToCoordinate from './percent-to-coordinate';

describe('Convert circumference in percent to a coordinate', () => {
  it('should convert percent to x and y coordinates', () => {
    const tests = [0.25, 0.65];
    const radius = 100;

    const expected = [
      [0, 100],
      [-58.77853, -80.9017],
    ];

    tests.forEach((test, i) => {
      expect(percentToCoordinate(test, radius)).toEqual(expected[i]);
    });
  });
});

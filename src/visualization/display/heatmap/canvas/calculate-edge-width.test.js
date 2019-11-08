import calculateEdgeWidth from './calculate-edge-width';

describe('Edge size', () => {
  it('should cap size when cell is 20 pixels or greater', () => {
    const tests = [20, 25, 100];
    tests.forEach((test) => {
      expect(calculateEdgeWidth(test)).toBe(3);
    });
  });

  it('should set size when cell is less than 20 pixels', () => {
    const tests = [15, 5];
    const expected = [3, 1];
    tests.forEach((test, index) => {
      expect(calculateEdgeWidth(test)).toBe(expected[index]);
    });
  });
});

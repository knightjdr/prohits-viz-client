import edgeSize from './edge-size';

describe('Edge size', () => {
  it('should cap size when cell is 15 pixels or greater', () => {
    const tests = [15, 20, 100];
    tests.forEach((test) => {
      expect(edgeSize(test)).toBe(1.5);
    });
  });

  it('should set size when cell is less than 15 pixels', () => {
    const tests = [10, 5];
    const expected = [1, 0.5];
    tests.forEach((test, index) => {
      expect(edgeSize(test)).toBe(expected[index]);
    });
  });
});

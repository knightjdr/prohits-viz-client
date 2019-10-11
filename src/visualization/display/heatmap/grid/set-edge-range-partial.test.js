import setEdgeRangePartial from './set-edge-range-partial';

describe('Set edge range', () => {
  describe('for gte score type', () => {
    let convertToRange;

    beforeAll(() => {
      convertToRange = setEdgeRangePartial(0.95, 0.90, 'gte', 0, 100);
    });

    it('should map numbers greater than or equal to primary filter to 100', () => {
      expect(convertToRange(0.95)).toBe(100);
      expect(convertToRange(1)).toBe(100);
    });

    it('should map numbers between primary and secondary filters to 50', () => {
      expect(convertToRange(0.94)).toBe(50);
      expect(convertToRange(0.9)).toBe(50);
    });

    it('should map numbers below secondary filter to 25', () => {
      expect(convertToRange(0.89)).toBe(25);
      expect(convertToRange(0)).toBe(25);
    });
  });

  describe('for lte score type', () => {
    let convertToRange;

    beforeAll(() => {
      convertToRange = setEdgeRangePartial(0.01, 0.05, 'lte', 0, 100);
    });

    it('should map numbers less than or equal to primary filter to 100', () => {
      expect(convertToRange(0)).toBe(100);
      expect(convertToRange(0.01)).toBe(100);
    });

    it('should map numbers between primary and secondary filters to 50', () => {
      expect(convertToRange(0.02)).toBe(50);
      expect(convertToRange(0.05)).toBe(50);
    });

    it('should map numbers below secondary filter to 25', () => {
      expect(convertToRange(0.06)).toBe(25);
      expect(convertToRange(1)).toBe(25);
    });
  });
});

import edgeRange from './edge-range';

describe('Set edge range', () => {
  describe('for gte score type', () => {
    let func;

    beforeAll(() => {
      func = edgeRange(0.95, 0.90, 'gte', 0, 100);
    });

    it('should map numbers greater than or equal to primary filter to 100', () => {
      expect(func(0.95)).toBe(100);
      expect(func(1)).toBe(100);
    });

    it('should map numbers between primary and secondary filters to 50', () => {
      expect(func(0.94)).toBe(50);
      expect(func(0.9)).toBe(50);
    });

    it('should map numbers below secondary filter to 25', () => {
      expect(func(0.89)).toBe(25);
      expect(func(0)).toBe(25);
    });
  });

  describe('for lte score type', () => {
    let func;

    beforeAll(() => {
      func = edgeRange(0.01, 0.05, 'lte', 0, 100);
    });

    it('should map numbers less than or equal to primary filter to 100', () => {
      expect(func(0)).toBe(100);
      expect(func(0.01)).toBe(100);
    });

    it('should map numbers between primary and secondary filters to 50', () => {
      expect(func(0.02)).toBe(50);
      expect(func(0.05)).toBe(50);
    });

    it('should map numbers below secondary filter to 25', () => {
      expect(func(0.06)).toBe(25);
      expect(func(1)).toBe(25);
    });
  });
});

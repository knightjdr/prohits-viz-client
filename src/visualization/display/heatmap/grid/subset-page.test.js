import { calculateRadiusPartial, validateScore } from './subset-page';

describe('Calculate circle radius', () => {
  describe('without resetting row ratios', () => {
    let calculateRadius;

    beforeAll(() => {
      calculateRadius = calculateRadiusPartial(false);
    });

    it('should return input radius when ratio is not a number', () => {
      expect(calculateRadius(undefined, 10)).toBe(10);
      expect(calculateRadius(null, 10)).toBe(10);
      expect(calculateRadius('a', 10)).toBe(10);
    });

    it('should return calculated radius when ratio is a number', () => {
      expect(calculateRadius(0, 10)).toBe(0);
      expect(calculateRadius(1, 10)).toBe(10);
      expect(calculateRadius(0.5, 10)).toBe(5);
    });
  });

  describe('resetting row ratios', () => {
    let calculateRadius;
    let columnOrder;
    let rowDB;
    let rowOrder;

    beforeAll(() => {
      columnOrder = [1, 0, 3];
      const pageEnd = { x: 3, y: 2 };
      const pageStart = { x: 0, y: 0 };
      rowOrder = [1, 0];
      rowDB = [
        {
          data: [
            { value: 0.2 },
            { value: 0.543 },
            { value: 0.75 },
            { value: 0.1 },
          ],
        },
        {
          data: [
            { value: 0.145 },
            { value: 0.327 },
            { value: 0.75 },
            { value: 0.788 },
          ],
        },
      ];
      calculateRadius = calculateRadiusPartial(true, rowOrder, columnOrder, rowDB, pageStart, pageEnd);
    });

    it('should calculate radius from value and row max', () => {
      let rowIndex = rowOrder[0];
      expect(calculateRadius(null, 10, rowDB[rowIndex].data[3].value, 0)).toBe(10);
      [, rowIndex] = rowOrder;
      expect(calculateRadius(null, 10, rowDB[rowIndex].data[0].value, 1)).toBe(3.68);
    });
  });
});

describe('Validate score', () => {
  it('should return zero when score is not a number', () => {
    expect(validateScore(undefined)).toBe(0);
    expect(validateScore(null)).toBe(0);
    expect(validateScore('a')).toBe(0);
  });

  it('should return calculated score when score is a number', () => {
    expect(validateScore(0)).toBe(0);
    expect(validateScore(1)).toBe(1);
    expect(validateScore(0.5)).toBe(0.5);
  });
});

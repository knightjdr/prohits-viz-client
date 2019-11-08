import { calculateRadiusPartial, validateScore } from './draw-dotplot';

describe('Calculate circle radius', () => {
  describe('without resetting row ratios', () => {
    let calculateRadius;

    beforeAll(() => {
      calculateRadius = calculateRadiusPartial(false);
    });

    it('should return input radius (scaled) when ratio is not a number', () => {
      const tests = [undefined, null, 'a'];
      const expected = 9;
      tests.forEach((test) => {
        expect(calculateRadius(test, 10)).toBe(expected);
      });
    });

    it('should return calculated radius when ratio is a number', () => {
      const tests = [
        { input: 0, expected: 0 },
        { input: 1, expected: 9 },
        { input: 0.5, expected: 4.5 },
      ];
      tests.forEach((test) => {
        expect(calculateRadius(test.input, 10)).toBe(test.expected);
      });
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

    it('should calculate radius based on row maximum', () => {
      const tests = [
        { expected: 9, rowMaxIndex: 0, value: rowDB[1].data[3].value },
        { expected: 3.31, rowMaxIndex: 1, value: rowDB[0].data[0].value },
      ];
      tests.forEach((test) => {
        expect(calculateRadius(null, 10, test.value, test.rowMaxIndex)).toBe(test.expected);
      });
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

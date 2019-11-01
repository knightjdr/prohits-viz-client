import calculateFractionalSelection from './calculate-fractional-selection';

describe('Calculate fractional selection', () => {
  it('should convert pixel dimensions to fraction', () => {
    const rect = {
      position: {
        x: 20,
        y: 80,
      },
      size: {
        height: 100,
        width: 150,
      },
    };
    const options = {
      cellSize: 10,
      dimensions: {
        columns: 20,
        rows: 40,
      },
    };
    const expected = {
      height: 0.25,
      width: 0.75,
      x: 0.1,
      y: 0.2,
    };
    expect(calculateFractionalSelection(rect, options)).toEqual(expected);
  });
});

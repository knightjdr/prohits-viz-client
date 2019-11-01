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
      position: {
        x: 5,
        y: 10,
      },
    };
    const expected = {
      height: 0.25,
      width: 0.75,
      x: 0.35,
      y: 0.45,
    };
    expect(calculateFractionalSelection(rect, options)).toEqual(expected);
  });
});

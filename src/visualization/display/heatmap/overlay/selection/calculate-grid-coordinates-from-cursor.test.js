import calculateGridCoordinatesFromCursor, { calculateCellIndex } from './calculate-grid-coordinates-from-cursor';

jest.mock('../../../common/overlay/calculate-cursor-position', () => () => ({ x: 90, y: 140 }));

describe('Calculate cell index', () => {
  it('should return index within bounds', () => {
    const cellSize = 10;
    const pageSize = 15;
    const cursorPosition = 134;
    const expected = 13;
    expect(calculateCellIndex(cursorPosition, cellSize, pageSize)).toBe(expected);
  });

  it('should return minimum when index below lower bound', () => {
    const cellSize = 10;
    const pageSize = 15;
    const cursorPosition = -1;
    const expected = 0;
    expect(calculateCellIndex(cursorPosition, cellSize, pageSize)).toBe(expected);
  });

  it('should return maximum when index above upper bound', () => {
    const cellSize = 10;
    const pageSize = 15;
    const cursorPosition = 251;
    const expected = 15;
    expect(calculateCellIndex(cursorPosition, cellSize, pageSize)).toBe(expected);
  });
});

describe('Calculate grid coordinates cursor position', () => {
  it('should return nearest cell coordinates', () => {
    const options = {
      cellSize: 10,
      dimensions: {
        pageX: 15,
        pageY: 10,
      },
    };
    const expected = {
      x: 90,
      y: 100,
    };
    expect(calculateGridCoordinatesFromCursor({}, options)).toEqual(expected);
  });
});

import calculateCellFromCursor, { calculateCellIndex } from './calculate-cell-from-cursor';

jest.mock('../calculate-cursor-position', () => () => ({ x: 90, y: 140 }));

describe('Calculate cell index', () => {
  it('should return index within bounds', () => {
    const cellSize = 10;
    const pageSize = 15;
    const pageStart = 10;
    const cursorPosition = 134;
    const expected = 13;
    expect(calculateCellIndex(cursorPosition, cellSize, pageStart, pageSize)).toBe(expected);
  });

  it('should return minimum when index below lower bound', () => {
    const cellSize = 10;
    const pageSize = 15;
    const pageStart = 10;
    const cursorPosition = 99;
    const expected = 10;
    expect(calculateCellIndex(cursorPosition, cellSize, pageStart, pageSize)).toBe(expected);
  });

  it('should return maximum when index above upper bound', () => {
    const cellSize = 10;
    const pageSize = 15;
    const pageStart = 10;
    const cursorPosition = 251;
    const expected = 25;
    expect(calculateCellIndex(cursorPosition, cellSize, pageStart, pageSize)).toBe(expected);
  });
});

describe('Calculate cell indices from cursor position', () => {
  it('should return nearest cell coordinates', () => {
    const options = {
      cellSize: 10,
      dimensions: {
        pageX: 15,
        pageY: 10,
      },
      position: {
        x: 10,
        y: 5,
      },
    };
    const expected = {
      x: 100,
      y: 140,
    };
    expect(calculateCellFromCursor({}, options)).toEqual(expected);
  });
});

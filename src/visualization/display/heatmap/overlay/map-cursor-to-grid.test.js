import mapCursorToGrid from './map-cursor-to-grid';

describe('Map cursor to grid', () => {
  it('should map cursor to a position within limits', () => {
    const cursorPosition = {
      x: 35,
      y: 50,
    };
    const options = {
      cellSize: 15,
      columnOrder: [5, 3, 7, 8, 1],
      pagePosition: {
        x: 1,
        y: 1,
      },
      rowOrder: [0, 4, 1, 2, 3],
    };

    const expected = {
      column: 8,
      row: 3,
    };

    expect(mapCursorToGrid(cursorPosition, options)).toEqual(expected);
  });

  it('should map cursor to a position at limit', () => {
    const cursorPosition = {
      x: 150,
      y: 150,
    };
    const options = {
      cellSize: 15,
      columnOrder: [5, 3, 7, 8, 1],
      pagePosition: {
        x: 1,
        y: 1,
      },
      rowOrder: [0, 4, 1, 2, 3],
    };

    const expected = {
      column: 1,
      row: 3,
    };

    expect(mapCursorToGrid(cursorPosition, options)).toEqual(expected);
  });
});

import extractSelectedData from './extract-selected-data';

describe('Extract selected data', () => {
  it('should return array of column and row indices encompassed by selection', () => {
    const options = {
      cellSize: 10,
      columnOrder: [5, 1, 2, 4, 3, 0],
      position: { x: 1, y: 0 },
      rowOrder: [2, 4, 1, 0, 3, 7, 8],
    };
    const rect = {
      position: {
        x: 20,
        y: 10,
      },
      size: {
        height: 20,
        width: 20,
      },
    };
    const expected = {
      columns: [4, 3],
      rows: [4, 1],
    };
    expect(extractSelectedData(rect, options)).toEqual(expected);
  });
});

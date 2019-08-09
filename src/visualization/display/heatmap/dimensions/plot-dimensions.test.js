import { plotHeight, plotWidth } from './plot-dimensions';

describe('calculate height', () => {
  it('should return height values when all rows fit within page', () => {
    const cellSize = 10;
    const cellHeight = 3;
    const windowHeight = 240;
    const expected = {
      arrowsY: false,
      heatmap: 30,
      pageY: 3,
      rows: 3,
      wrapper: 132,
    };
    expect(plotHeight(cellSize, cellHeight, windowHeight, false)).toEqual(expected);
  });

  it('should return height values when rows do not fit within page', () => {
    const cellSize = 10;
    const cellHeight = 3;
    const windowHeight = 180;
    const expected = {
      arrowsY: true,
      heatmap: 20,
      pageY: 2,
      rows: 3,
      wrapper: 120,
    };
    expect(plotHeight(cellSize, cellHeight, windowHeight, false)).toEqual(expected);
  });

  it('should return height values when extra padding is available', () => {
    const cellSize = 10;
    const cellHeight = 3;
    const windowHeight = 210;
    const expected = {
      arrowsY: true,
      heatmap: 20,
      pageY: 2,
      rows: 3,
      wrapper: 120,
    };
    expect(plotHeight(cellSize, cellHeight, windowHeight, true)).toEqual(expected);
  });
});

describe('calculate width', () => {
  it('should return width values when all columns fit within page', () => {
    const cellSize = 10;
    const cellWidth = 3;
    const windowWidth = 200;
    const expected = {
      arrowsX: false,
      canTranslate: true,
      columns: 3,
      heatmap: 30,
      pageX: 3,
      wrapper: 132,
    };
    expect(plotWidth(cellSize, cellWidth, windowWidth)).toEqual(expected);
  });

  it('should return width values when columns do not fit within page', () => {
    const cellSize = 10;
    const cellWidth = 3;
    const windowWidth = 170;
    const expected = {
      arrowsX: true,
      canTranslate: false,
      columns: 3,
      heatmap: 20,
      pageX: 2,
      wrapper: 120,
    };
    expect(plotWidth(cellSize, cellWidth, windowWidth)).toEqual(expected);
  });
});

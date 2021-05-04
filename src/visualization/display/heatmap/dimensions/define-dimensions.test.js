import defineDimensions, { calculateHeight, calculateWidth } from './define-dimensions';

describe('calculate height', () => {
  it('should return height values when all rows fit within page', () => {
    const cellSize = 10;
    const noRows = 3;
    const windowHeight = 240;
    const expected = {
      arrowsY: false,
      heatmap: 30,
      pageY: 3,
      rows: 3,
      scrollContainer: 30,
      scrollContent: 30,
      scrollTop: 0,
      wrapper: 132,
    };
    expect(calculateHeight(cellSize, noRows, windowHeight, false)).toEqual(expected);
  });

  it('should return height values when rows do not fit within page', () => {
    const cellSize = 10;
    const noRows = 3;
    const windowHeight = 180;
    const expected = {
      arrowsY: true,
      heatmap: 20,
      pageY: 2,
      rows: 3,
      scrollContainer: 20,
      scrollContent: 30,
      scrollTop: 0,
      wrapper: 120,
    };
    expect(calculateHeight(cellSize, noRows, windowHeight, false)).toEqual(expected);
  });

  it('should return height values when extra padding is available', () => {
    const cellSize = 10;
    const noRows = 3;
    const windowHeight = 230;
    const expected = {
      arrowsY: true,
      heatmap: 20,
      pageY: 2,
      rows: 3,
      scrollContainer: 20,
      scrollContent: 30,
      scrollTop: 0,
      wrapper: 120,
    };
    expect(calculateHeight(cellSize, noRows, windowHeight, true)).toEqual(expected);
  });
});

describe('calculate width', () => {
  it('should return width values when all columns fit within page', () => {
    const cellSize = 10;
    const noCols = 3;
    const windowWidth = 210;
    const expected = {
      arrowsX: false,
      canTranslate: true,
      columns: 3,
      heatmap: 30,
      pageX: 3,
      scrollContainer: 30,
      scrollContent: 30,
      scrollLeft: 0,
      wrapper: 132,
    };
    expect(calculateWidth(cellSize, noCols, windowWidth)).toEqual(expected);
  });

  it('should return width values when columns do not fit within page', () => {
    const cellSize = 10;
    const noCols = 3;
    const windowWidth = 190;
    const expected = {
      arrowsX: true,
      canTranslate: false,
      columns: 3,
      heatmap: 20,
      pageX: 2,
      scrollContainer: 20,
      scrollContent: 30,
      scrollLeft: 0,
      wrapper: 120,
    };
    expect(calculateWidth(cellSize, noCols, windowWidth)).toEqual(expected);
  });
});

describe('Define heat map dimensions', () => {
  it('should define height and width when no scroll bars are needed', () => {
    const cellSize = 10;
    const noCols = 3;
    const noRows = 3;
    const windowHeight = 250;
    const windowWidth = 210;

    const expected = {
      height: {
        arrowsY: false,
        heatmap: 30,
        pageY: 3,
        rows: 3,
        scrollContainer: 30,
        scrollContent: 30,
        scrollTop: 0,
        wrapper: 132,
      },
      width: {
        arrowsX: false,
        canTranslate: true,
        columns: 3,
        heatmap: 30,
        pageX: 3,
        scrollContainer: 30,
        scrollContent: 30,
        scrollLeft: 0,
        wrapper: 132,
      },
    };
    expect(defineDimensions(cellSize, noRows, noCols, windowHeight, windowWidth)).toEqual(expected);
  });

  it('should define height and width when scroll bars are needed', () => {
    const cellSize = 10;
    const noCols = 50;
    const noRows = 100;
    const windowHeight = 530;
    const windowWidth = 400;

    const expected = {
      height: {
        arrowsY: true,
        heatmap: 320,
        pageY: 32,
        rows: 100,
        scrollContainer: 320,
        scrollContent: 1000,
        scrollTop: 0,
        wrapper: 420,
      },
      width: {
        arrowsX: true,
        canTranslate: false,
        columns: 50,
        heatmap: 230,
        pageX: 23,
        scrollContainer: 230,
        scrollContent: 500,
        scrollLeft: 0,
        wrapper: 330,
      },
    };
    expect(defineDimensions(cellSize, noRows, noCols, windowHeight, windowWidth)).toEqual(expected);
  });
});

import calculatePageDimensions, { calculatePageSize, shouldReset } from './calculate-page-dimensions';

describe('Calculate page size (height/width)', () => {
  it('should return set the page size using the page end when the page array has sufficient length', () => {
    const cellSize = 5;
    const page = [...Array(25)];
    const pageStart = 10;
    const pageEnd = 20;
    const expected = 50;
    expect(calculatePageSize(cellSize, pageStart, pageEnd, page)).toBe(expected);
  });

  it('should return set the page size from the page array', () => {
    const cellSize = 5;
    const page = [...Array(15)];
    const pageStart = 10;
    const pageEnd = 20;
    const expected = 25;
    expect(calculatePageSize(cellSize, pageStart, pageEnd, page)).toBe(expected);
  });
});

describe('Reset image position', () => {
  it('should return false when the page start postions are within the available size', () => {
    const columnOrder = [...Array(16)];
    const pageStart = {
      x: 15,
      y: 15,
    };
    const rowOrder = [...Array(16)];
    expect(shouldReset(pageStart, columnOrder, rowOrder)).toBeFalsy();
  });

  it('should return true when the horizontal page start postion exceeds the available size', () => {
    const columnOrder = [...Array(14)];
    const pageStart = {
      x: 15,
      y: 15,
    };
    const rowOrder = [...Array(16)];
    expect(shouldReset(pageStart, columnOrder, rowOrder)).toBeTruthy();
  });

  it('should return true when the vertical page start postion exceeds the available size', () => {
    const columnOrder = [...Array(16)];
    const pageStart = {
      x: 15,
      y: 15,
    };
    const rowOrder = [...Array(14)];
    expect(shouldReset(pageStart, columnOrder, rowOrder)).toBeTruthy();
  });
});

describe('Calculate page dimensions', () => {
  it('should return an object with details about the page', () => {
    const cellSize = 10;
    const columnOrder = [...Array(20)];
    const imageDimensions = {
      pageX: 10,
      pageY: 5,
    };
    const imagePosition = {
      x: 5,
      y: 2,
    };
    const rowOrder = [...Array(20)];
    const expected = {
      dpi: 1,
      canvasHeight: 50,
      canvasWidth: 100,
      height: 50,
      pageEnd: { x: 15, y: 7 },
      pageStart: { x: 5, y: 2 },
      transform: 'scale(1)',
      resetPosition: false,
      width: 100,
    };
    expect(calculatePageDimensions(imageDimensions, imagePosition, columnOrder, rowOrder, cellSize)).toEqual(expected);
  });
});

const DPI = window.devicePixelRatio;

export const calculatePageSize = (cellSize, pageStart, pageEnd, page) => (
  (Math.min(page.length, pageEnd) - pageStart) * cellSize
);

export const shouldReset = (pageStart, columnOrder, rowOrder) => (
  pageStart.x > columnOrder.length || pageStart.y > rowOrder.length
);

const calculatePageDimensions = (imageDimensions, imagePosition, columnOrder, rowOrder, cellSize) => {
  const pageStart = {
    x: Math.max(0, imagePosition.x),
    y: Math.max(0, imagePosition.y),
  };
  const pageEnd = {
    x: imagePosition.x + imageDimensions.pageX,
    y: imagePosition.y + imageDimensions.pageY,
  };

  const height = calculatePageSize(cellSize, pageStart.y, pageEnd.y, rowOrder);
  const width = calculatePageSize(cellSize, pageStart.x, pageEnd.x, columnOrder);

  return {
    dpi: DPI,
    canvasHeight: height * DPI,
    canvasWidth: width * DPI,
    height,
    pageEnd,
    pageStart,
    transform: `scale(${1 / DPI})`,
    resetPosition: shouldReset(pageStart, columnOrder, rowOrder),
    width,
  };
};

export default calculatePageDimensions;

import calculateCursorPosition from '../calculate-cursor-position';

export const calculateCellIndex = (position, cellSize, pageStart, pageSize) => {
  const cellIndex = Math.round(position / cellSize);
  const pageEnd = pageStart + pageSize;
  if (cellIndex < pageStart) {
    return pageStart;
  } if (cellIndex > pageEnd) {
    return pageEnd;
  }
  return cellIndex;
};

const calculateCellFromCursor = (e, options) => {
  const {
    cellSize,
    dimensions,
    position,
    ref,
  } = options;
  const cursorPosition = calculateCursorPosition(e, ref);
  const cell = {
    x: calculateCellIndex(cursorPosition.x, cellSize, position.x, dimensions.pageX),
    y: calculateCellIndex(cursorPosition.y, cellSize, position.y, dimensions.pageY),
  };

  return {
    x: cell.x * cellSize,
    y: cell.y * cellSize,
  };
};

export default calculateCellFromCursor;

import calculateCursorPosition from '../calculate-cursor-position';

export const calculateCellIndex = (position, cellSize, pageSize) => {
  const cellIndex = Math.round(position / cellSize);
  if (cellIndex <= 0) {
    return 0;
  } if (cellIndex > pageSize) {
    return pageSize;
  }
  return cellIndex;
};

const calculateCellFromCursor = (e, options) => {
  const {
    cellSize,
    dimensions,
    ref,
  } = options;
  const cursorPosition = calculateCursorPosition(e, ref);
  const cell = {
    x: calculateCellIndex(cursorPosition.x, cellSize, dimensions.pageX),
    y: calculateCellIndex(cursorPosition.y, cellSize, dimensions.pageY),
  };

  return {
    x: cell.x * cellSize,
    y: cell.y * cellSize,
  };
};

export default calculateCellFromCursor;

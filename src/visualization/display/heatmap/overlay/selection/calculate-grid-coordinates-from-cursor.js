import calculateCursorPosition from '../../../common/overlay/calculate-cursor-position';
import convertPositionToCell from './convert-position-to-cell';

export const calculateCellIndex = (position, cellSize, pageSize) => {
  const cellIndex = convertPositionToCell(cellSize, position);
  if (cellIndex <= 0) {
    return 0;
  } if (cellIndex > pageSize) {
    return pageSize;
  }
  return cellIndex;
};

const calculateGridCoordinatesFromCursor = (e, options) => {
  const { cellSize, dimensions, ref } = options;
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

export default calculateGridCoordinatesFromCursor;

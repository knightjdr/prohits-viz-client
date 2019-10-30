import calculateCursorPosition from '../calculate-cursor-position';


const calculateCell = (position, cellSize, pageStart, pageSize) => {
  const cellIndex = Math.round(position / cellSize);
  const limit = pageStart + pageSize;
  if (cellIndex < pageStart) {
    return pageStart;
  } if (cellIndex > limit) {
    return limit;
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
    x: calculateCell(cursorPosition.x, cellSize, position.x, dimensions.pageX),
    y: calculateCell(cursorPosition.y, cellSize, position.y, dimensions.pageY),
  };

  return {
    cell,
    coordinates: {
      x: cell.x * cellSize,
      y: cell.y * cellSize,
    },
  };
};

export default calculateCellFromCursor;

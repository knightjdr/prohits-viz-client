const findPageIndex = (cellSize, cursorPosition, maxIndex) => {
  const column = Math.floor(cursorPosition.x / cellSize);
  const row = Math.floor(cursorPosition.y / cellSize);

  return {
    column: column <= maxIndex.column ? column : maxIndex.column,
    row: row <= maxIndex.row ? row : maxIndex.row,
  };
};

const mapCursorToGrid = (cursorPosition, options) => {
  const {
    cellSize,
    columnOrder,
    pagePosition,
    rowOrder,
  } = options;

  const maxIndex = {
    column: columnOrder.length - pagePosition.x - 1,
    row: rowOrder.length - pagePosition.y - 1,
  };

  const pageIndex = findPageIndex(cellSize, cursorPosition, maxIndex);

  return {
    column: columnOrder[pagePosition.x + pageIndex.column],
    row: rowOrder[pagePosition.y + pageIndex.row],
  };
};

export default mapCursorToGrid;

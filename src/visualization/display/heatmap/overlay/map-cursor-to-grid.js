const mapCursorToGrid = (cursorPosition, options) => {
  const {
    cellSize,
    columnOrder,
    pagePosition,
    rowOrder,
  } = options;

  const columnIndex = columnOrder[pagePosition.x + Math.floor(cursorPosition.x / cellSize)];
  const rowIndex = rowOrder[pagePosition.y + Math.floor(cursorPosition.y / cellSize)];

  const maxIndex = {
    column: columnOrder.length - 1,
    row: rowOrder.length - 1,
  };

  return {
    column: columnIndex <= maxIndex.column ? columnIndex : maxIndex.column,
    row: rowIndex <= maxIndex.row ? rowIndex : maxIndex.row,
  };
};

export default mapCursorToGrid;

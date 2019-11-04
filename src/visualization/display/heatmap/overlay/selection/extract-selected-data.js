import convertPositionToCell from './convert-position-to-cell';

const extractSelectedData = (rect, options) => {
  const {
    cellSize,
    columnOrder,
    position,
    rowOrder,
  } = options;

  const startIndex = {
    x: position.x + convertPositionToCell(cellSize, rect.position.x),
    y: position.y + convertPositionToCell(cellSize, rect.position.y),
  };

  const endIndex = {
    x: startIndex.x + convertPositionToCell(cellSize, rect.size.width),
    y: startIndex.y + convertPositionToCell(cellSize, rect.size.height),
  };

  return {
    columns: columnOrder.slice(startIndex.x, endIndex.x),
    rows: rowOrder.slice(startIndex.y, endIndex.y),
  };
};

export default extractSelectedData;

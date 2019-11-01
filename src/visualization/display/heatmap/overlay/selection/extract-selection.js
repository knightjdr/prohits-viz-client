const extractSelection = (rect, options) => {
  const {
    cellSize,
    columnOrder,
    position,
    rowOrder,
  } = options;

  const startIndex = {
    x: position.x + Math.round(rect.position.x / cellSize),
    y: position.y + Math.round(rect.position.y / cellSize),
  };

  const endIndex = {
    x: startIndex.x + Math.round(rect.size.width / cellSize),
    y: startIndex.y + Math.round(rect.size.height / cellSize),
  };

  return {
    columns: columnOrder.slice(startIndex.x, endIndex.x),
    rows: rowOrder.slice(startIndex.y, endIndex.y),
  };
};

export default extractSelection;

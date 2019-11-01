const calculateFractionalSelection = (rect, options) => {
  const { cellSize, dimensions, position } = options;
  const { columns, rows } = dimensions;

  const gridPosition = {
    x: Math.round(rect.position.x / cellSize),
    y: Math.round(rect.position.y / cellSize),
  };

  const height = cellSize * rows;
  const width = cellSize * columns;

  return {
    height: rect.size.height / height,
    width: rect.size.width / width,
    x: (position.x + gridPosition.x) / columns,
    y: (position.y + gridPosition.y) / rows,
  };
};

export default calculateFractionalSelection;

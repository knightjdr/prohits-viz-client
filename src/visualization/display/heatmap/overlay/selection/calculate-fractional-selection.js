const calculateFractionalSelection = (rect, options) => {
  const { cellSize, dimensions } = options;
  const { columns, rows } = dimensions;

  const height = cellSize * rows;
  const width = cellSize * columns;

  return {
    height: rect.size.height / height,
    width: rect.size.width / width,
    x: rect.position.x / width,
    y: rect.position.y / height,
  };
};

export default calculateFractionalSelection;

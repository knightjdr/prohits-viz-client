const calculateBoundaires = (cellSize, height, width) => {
  const fractionalCellSize = {
    x: cellSize / width,
    y: cellSize / height,
  };
  return {
    x: {
      max: 1 - fractionalCellSize.x,
      min: 0 + fractionalCellSize.x,
    },
    y: {
      max: 1 - fractionalCellSize.y,
      min: 0 + fractionalCellSize.y,
    },
  };
};

export default calculateBoundaires;

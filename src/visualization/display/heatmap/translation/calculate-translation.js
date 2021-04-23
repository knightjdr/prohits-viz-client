const calculateTranslation = (cellSize, cellX, cellY) => {
  const x = cellSize * cellX;
  const y = cellSize * cellY;
  return `translate(-${x}, -${y})`;
};

export default calculateTranslation;

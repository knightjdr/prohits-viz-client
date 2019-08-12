const translation = (cellSize, cellX, cellY) => {
  const x = 100 - (cellSize * cellX);
  const y = 100 - (cellSize * cellY);
  return `translate(${x} ${y})`;
};

export default translation;

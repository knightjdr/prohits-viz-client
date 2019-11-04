const convertPositionToCell = (cellSize, position) => (
  Math.round(position / cellSize)
);

export default convertPositionToCell;

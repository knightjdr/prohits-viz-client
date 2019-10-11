import round from '../../../../utils/round';

const calculateEdgeWidth = cellSize => (
  cellSize < 15 ? round(cellSize / 10, 1) : 1.5
);

export default calculateEdgeWidth;

import round from '../../../../utils/round';

const calculateEdgeWidth = cellSize => (
  cellSize >= 20 ? 3 : round(cellSize / 5, 1)
);

export default calculateEdgeWidth;

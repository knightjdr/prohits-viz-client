import round from '../../../../utils/round';

const DPI = window.devicePixelRatio;

export const calculateRadiusPartial = (resetRatios, rowOrder, columnOrder, rowDB, pageStart, pageEnd) => {
  if (resetRatios) {
    const rowMaximums = rowOrder.slice(pageStart.y, pageEnd.y).map(rowIndex => (
      columnOrder.slice(pageStart.x, pageEnd.x).reduce((max, columnIndex) => (
        rowDB[rowIndex].data[columnIndex].value > max ? rowDB[rowIndex].data[columnIndex].value : max
      ), 0)
    ));
    return (ratio, radius, value, index) => (
      round(radius * (value / rowMaximums[index]), 2)
    );
  }
  return (ratio, radius) => (
    typeof ratio === 'number' ? radius * ratio : radius
  );
};

export const validateScore = score => (
  typeof score === 'number' ? score : 0
);

const drawCanvas = (
  canvas,
  imageType,
  rowDB,
  columnOrder,
  rowOrder,
  position,
  dimensions,
  cellSize,
  edgeSize,
  edgeGradient,
  fillGradient,
  convertToEdgeRange,
  convertToFillRange,
  resetRatios,
) => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  const pageStart = {
    x: Math.max(0, position.x),
    y: Math.max(0, position.y),
  };
  const pageEnd = {
    x: position.x + dimensions.pageX,
    y: position.y + dimensions.pageY,
  };
  const vertex = cellSize * DPI;
  rowOrder.slice(pageStart.y, pageEnd.y).forEach((rowIndex, i) => {
    const y = i * cellSize * DPI;
    columnOrder.slice(pageStart.x, pageEnd.x).forEach((columnIndex, j) => {
      const x = j * cellSize * DPI;
      const item = rowDB[rowIndex].data[columnIndex];
      ctx.fillStyle = fillGradient[convertToFillRange(item.value)];
      ctx.fillRect(x, y, vertex, vertex);
    });
  });
};

export default drawCanvas;

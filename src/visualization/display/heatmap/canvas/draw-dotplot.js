import round from '../../../../utils/round';

const RADIUS_SCALE = 0.9;

export const calculateRadiusPartial = (resetRatios, rowOrder, columnOrder, rowDB, pageStart, pageEnd) => {
  if (resetRatios) {
    const rowMaximums = rowOrder.slice(pageStart.y, pageEnd.y).map(rowIndex => (
      columnOrder.slice(pageStart.x, pageEnd.x).reduce((max, columnIndex) => (
        rowDB[rowIndex].data[columnIndex].value > max ? rowDB[rowIndex].data[columnIndex].value : max
      ), 0)
    ));
    return (ratio, radius, value, index) => (
      round(RADIUS_SCALE * radius * (value / rowMaximums[index]), 2)
    );
  }
  return (ratio, radius) => (
    (typeof ratio === 'number' ? radius * ratio : radius) * RADIUS_SCALE
  );
};

export const validateScore = score => (
  typeof score === 'number' ? score : 0
);

const drawDotplot = (ctx, pageSettings) => {
  const {
    cellSize,
    columnOrder,
    convertToEdgeRange,
    convertToFillRange,
    edgeGradient,
    edgeWidth,
    fillGradient,
    pageDimensions,
    resetRatios,
    rowDB,
    rowOrder,
  } = pageSettings;
  const { dpi, pageEnd, pageStart } = pageDimensions;
  const calculateRadius = calculateRadiusPartial(resetRatios, rowOrder, columnOrder, rowDB, pageStart, pageEnd);
  const circleRadius = Math.floor((cellSize / 2) - 1);
  const arcEndPoint = 2 * Math.PI;
  const offset = (cellSize * dpi) / 2;
  rowOrder.slice(pageStart.y, pageEnd.y).forEach((rowIndex, i) => {
    const y = (i * cellSize * dpi) + offset;
    columnOrder.slice(pageStart.x, pageEnd.x).forEach((columnIndex, j) => {
      const item = rowDB[rowIndex].data[columnIndex];
      const edgeColor = edgeGradient[convertToEdgeRange(validateScore(item.score))];
      const fillColor = fillGradient[convertToFillRange(item.value)];
      const radius = calculateRadius(item.ratio, circleRadius, item.value, i) * dpi;
      const x = (j * cellSize * dpi) + offset;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, arcEndPoint);
      ctx.strokeStyle = edgeColor;
      ctx.lineWidth = edgeWidth * dpi;
      ctx.stroke();
      ctx.fillStyle = fillColor;
      ctx.fill();
    });
  });
};

export default drawDotplot;

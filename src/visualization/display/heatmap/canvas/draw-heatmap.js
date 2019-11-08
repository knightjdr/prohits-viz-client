const drawHeatmap = (ctx, pageSettings) => {
  const {
    cellSize,
    columnOrder,
    convertToFillRange,
    fillGradient,
    pageDimensions,
    rowDB,
    rowOrder,
  } = pageSettings;
  const { dpi, pageEnd, pageStart } = pageDimensions;
  const cellDimension = cellSize * dpi;

  rowOrder.slice(pageStart.y, pageEnd.y).forEach((rowIndex, i) => {
    const y = i * cellSize * dpi;
    columnOrder.slice(pageStart.x, pageEnd.x).forEach((columnIndex, j) => {
      const x = j * cellSize * dpi;
      const item = rowDB[rowIndex].data[columnIndex];
      ctx.fillStyle = fillGradient[convertToFillRange(item.value)];
      ctx.fillRect(x, y, cellDimension, cellDimension);
    });
  });
};

export default drawHeatmap;

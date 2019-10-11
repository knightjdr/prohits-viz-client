import React from 'react';

import round from '../../../../utils/round';

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

/* subsetPage takes an array of row/heatmap data, slices it in both
** dimensions to fit the display. For heatmaps it adds in the fill color value
** after mapping the value to the gradient color range, while for dotplots
** it will add the edge color and radius as well. */
const subsetPage = (
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
  const pageStart = {
    x: Math.max(0, position.x),
    y: Math.max(0, position.y),
  };
  const pageEnd = {
    x: position.x + dimensions.pageX,
    y: position.y + dimensions.pageY,
  };
  const xPadding = cellSize * pageStart.x;
  const yPadding = cellSize * pageStart.y;
  if (imageType === 'dotplot') {
    const calculateRadius = calculateRadiusPartial(resetRatios, rowOrder, columnOrder, rowDB, pageStart, pageEnd);
    const circleRadius = Math.floor((cellSize / 2) - 1);
    const offset = cellSize / 2;
    return rowOrder.slice(pageStart.y, pageEnd.y).map((rowIndex, i) => (
      columnOrder.slice(pageStart.x, pageEnd.x).map((columnIndex, j) => {
        const item = rowDB[rowIndex].data[columnIndex];
        const edgeColor = edgeGradient[convertToEdgeRange(validateScore(item.score))];
        const fillColor = fillGradient[convertToFillRange(item.value)];
        const radius = calculateRadius(item.ratio, circleRadius, item.value, i);
        const key = `${rowDB[rowIndex].name}-${pageStart.y + i}-${pageStart.x + j}`;
        return (
          <circle
            cx={(j * cellSize) + xPadding + offset}
            cy={(i * cellSize) + yPadding + offset}
            fill={fillColor}
            key={key}
            r={radius}
            stroke={edgeColor}
            strokeWidth={edgeSize}
          />
        );
      })
    ));
  }
  return rowOrder.slice(pageStart.y, pageEnd.y).map((rowIndex, i) => (
    columnOrder.slice(pageStart.x, pageEnd.x).map((columnIndex, j) => {
      const item = rowDB[rowIndex].data[columnIndex];
      const fillColor = fillGradient[convertToFillRange(item.value)];
      const key = `${rowDB[rowIndex].name}-${pageStart.y + i}-${pageStart.x + j}`;
      return (
        <rect
          fill={fillColor}
          height={cellSize}
          key={key}
          width={cellSize}
          x={(j * cellSize) + xPadding}
          y={(i * cellSize) + yPadding}
        />
      );
    })
  ));
};

export default subsetPage;

import React from 'react';

/* getPage takes an array of row/heatmap data, slices it in both
** dimensions to fit the display. For heatmaps it adds in the fill color value
** after mapping the value to the gradient color range, while for dotplots
** it will add the edge color and radius as well. */

export const setRadius = (ratio, radius) => (
  typeof ratio === 'number' ? radius * ratio : radius
);

export const setScore = score => (
  typeof score === 'number' ? score : 0
);

const page = (
  imageType,
  rows,
  position,
  dimensions,
  cellSize,
  edgeSize,
  edgeGradient,
  fillGradient,
  edgeRange,
  fillRange,
) => {
  const pageStart = {
    x: Math.max(0, position.x),
    y: Math.max(0, position.y),
  };
  const pageEnd = {
    x: position.x + dimensions.pageX,
    y: position.y + dimensions.pageY,
  };
  const circleRadius = Math.floor((cellSize / 2) - 1);
  const xPadding = cellSize * pageStart.x;
  const yPadding = cellSize * pageStart.y;
  if (imageType === 'dotplot') {
    const offset = cellSize / 2;
    return rows.slice(pageStart.y, pageEnd.y).map((row, i) => (
      row.data.slice(pageStart.x, pageEnd.x).map((item, j) => {
        const edgeColor = edgeGradient[edgeRange(setScore(item.score))];
        const fillColor = fillGradient[fillRange(item.value)];
        const radius = setRadius(item.ratio, circleRadius);
        const key = `${row.name}-${pageStart.y + i}-${pageStart.x + j}`;
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
  return rows.slice(pageStart.y, pageEnd.y).map((row, i) => (
    row.data.slice(pageStart.x, pageEnd.x).map((item, j) => {
      const fillColor = fillGradient[fillRange(item.value)];
      const key = `${row.name}-${i}-${j}`;
      return (
        <circle
          x={(j * cellSize) + xPadding}
          y={(i * cellSize) + yPadding}
          fill={fillColor}
          key={key}
        />
      );
    })
  ));
};

export default page;

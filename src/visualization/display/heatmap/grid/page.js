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
  edgeGradient,
  fillGradient,
  edgeRange,
  fillRange,
  pageBuffer,
) => {
  const pageStart = {
    x: Math.max(0, position.x - pageBuffer),
    y: Math.max(0, position.y - pageBuffer),
  };
  const pageEnd = {
    x: position.x + dimensions.pageX + pageBuffer,
    y: position.y + dimensions.pageY + pageBuffer,
  };
  const circleRadius = Math.floor((cellSize / 2) - 1);
  if (imageType === 'dotplot') {
    return rows.slice(pageStart.y, pageEnd.y).map(row => ({
      data: row.data.slice(pageStart.x, pageEnd.x).map((item, i) => ({
        ...item,
        edgeColor: edgeGradient[edgeRange(setScore(item.score))],
        fillColor: fillGradient[fillRange(item.value)],
        key: `${row.name}-${i}`,
        radius: setRadius(item.ratio, circleRadius),
      })),
      name: row.name,
    }));
  }
  return rows.slice(pageStart.y, pageEnd.y).map(row => ({
    data: row.data.slice(pageStart.x, pageEnd.x).map((item, i) => ({
      ...item,
      fillColor: fillGradient[fillRange(item.value)],
      key: `${row.name}-${i}`,
    })),
    name: row.name,
  }));
};

export default page;

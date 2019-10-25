import React from 'react';

const createTextElement = (column, row, rowDB) => (
  Object.entries(rowDB[row].data[column]).map(([key, value]) => (
    <div key={key}>
      {key}
      :
      {' '}
      {value}
    </div>
  ))
);

const createTooltipProperties = (e, options) => {
  const { clientX, clientY, target } = e;
  const { cellSize, pagePosition, rowDB } = options;
  const { left, top } = target.getBoundingClientRect();
  const gridPosition = {
    x: clientX - left,
    y: clientY - top,
  };
  const columnIndex = pagePosition.x + Math.floor(gridPosition.x / cellSize);
  const rowIndex = pagePosition.y + Math.floor(gridPosition.y / cellSize);
  const text = createTextElement(columnIndex, rowIndex, rowDB);
  return {
    text,
    x: clientX + 10,
    y: clientY,
  };
};

export default createTooltipProperties;

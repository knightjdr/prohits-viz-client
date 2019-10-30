import React from 'react';

import calculateCursorPosition from '../calculate-cursor-position';
import mapCursorToGrid from '../map-cursor-to-grid';

export const defaultTooltipState = {
  open: false,
  position: {
    x: 0,
    y: 0,
  },
  text: '',
};

const createTextElement = (column, row, rowDB) => (
  Object.entries(rowDB[row].data[column]).map(([key, value]) => (
    <div key={key} style={{ margin: '2px 0' }}>
      {key}
      :
      {' '}
      {value}
    </div>
  ))
);

const createTooltipProperties = (e, options) => {
  const { ref, rowDB } = options;

  const cursorPosition = calculateCursorPosition(e, ref);

  const indices = mapCursorToGrid(cursorPosition, options);
  const text = createTextElement(indices.column, indices.row, rowDB);
  return {
    open: true,
    text,
    position: {
      x: cursorPosition.clientX + 10,
      y: cursorPosition.clientY,
    },
  };
};

export default createTooltipProperties;

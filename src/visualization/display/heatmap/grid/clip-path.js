import React from 'react';

const clipPath = (cellSize, cellX, cellY, height, width) => {
  const x = cellSize * cellX;
  const y = cellSize * cellY;
  return (
    <clipPath id="clipPath">
      <rect
        height={height}
        width={width}
        x={x}
        y={y}
      />
    </clipPath>
  );
};

export default clipPath;

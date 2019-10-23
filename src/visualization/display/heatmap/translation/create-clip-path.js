import React from 'react';

const createClipPath = (clipPathID, cellSize, cellX, cellY, height, width) => {
  const x = cellSize * cellX;
  const y = cellSize * cellY;
  return (
    <clipPath id={clipPathID}>
      <rect
        height={height}
        width={width}
        x={x}
        y={y}
      />
    </clipPath>
  );
};

export default createClipPath;

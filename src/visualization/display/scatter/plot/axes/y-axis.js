import PropTypes from 'prop-types';
import React from 'react';

import { getTransformedXCoordinate } from './get-transformed-coordinate';

const YAxis = ({
  axisLength,
  fontSize,
  line,
  scale,
  strokeWidth,
  ticks,
  transform,
}) => {
  const { x1, y1 } = line;
  const transformedX = getTransformedXCoordinate(x1, y1, transform);
  let x = transformedX < 0 ? x1 - (transformedX / scale) : x1;
  x = transformedX > axisLength ? x - ((transformedX - axisLength) / scale) : x;
  const tickFontSizeDy = fontSize / 3;
  const tickLabelPosition = x - (13 / scale);
  const tickEnd = x - (10 / scale);
  return (
    <g>
      <line
        stroke="#333333"
        strokeWidth={strokeWidth}
        x1={x}
        x2={x}
        y1={line.y1}
        y2={line.y2}
      />
      {
        ticks.map((tick) => {
          const yPosition = axisLength - tick.y;
          return (
            tick.label !== 0
          && (
            <g key={`y-tick-${tick.key}`}>
              <line
                stroke="#333333"
                strokeWidth={strokeWidth}
                x1={x}
                x2={tickEnd}
                y1={yPosition}
                y2={yPosition}
              />
              <text
                dy={tickFontSizeDy}
                fontSize={`${fontSize}px`}
                textAnchor="end"
                x={tickLabelPosition}
                y={yPosition}
              >
                {tick.label}
              </text>
            </g>
          )
          );
        })
      }
    </g>
  );
};

YAxis.propTypes = {
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  line: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  scale: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  ticks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.number,
      x: PropTypes.number,
    }),
  ).isRequired,
  transform: PropTypes.string.isRequired,
};

export default YAxis;

import PropTypes from 'prop-types';
import React from 'react';

import { getTransformedYCoordinate } from './get-transformed-coordinate';

const XAxis = ({
  axisLength,
  fontSize,
  line,
  scale,
  strokeWidth,
  ticks,
  transform,
}) => {
  const { x1, y1 } = line;
  const transformedY = getTransformedYCoordinate(x1, y1, transform);
  let y = transformedY < 0 ? y1 - (transformedY / scale) : y1;
  y = transformedY > axisLength ? y - ((transformedY - axisLength) / scale) : y;
  const tickLabelPosition = y + (28 / scale);
  const tickEnd = y + (10 / scale);
  return (
    <g>
      <line
        stroke="#333333"
        strokeWidth={strokeWidth}
        x1={line.x1}
        x2={line.x2}
        y1={y}
        y2={y}
      />
      {
        ticks.map((tick) => (
          tick.label !== 0
          && (
            <g key={`x-tick-${tick.key}`}>
              <line
                stroke="#333333"
                strokeWidth={strokeWidth}
                x1={tick.x}
                x2={tick.x}
                y1={y}
                y2={tickEnd}
              />
              <text
                fontSize={`${fontSize}px`}
                textAnchor="middle"
                x={tick.x}
                y={tickLabelPosition}
              >
                {tick.label}
              </text>
            </g>
          )
        ))
      }
    </g>
  );
};

XAxis.propTypes = {
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

export default XAxis;

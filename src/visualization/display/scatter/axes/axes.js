import PropTypes from 'prop-types';
import React from 'react';

import './axes.css';

const Axes = ({
  height,
  labels,
  width,
}) => {
  const yLabelPosition = height / 2;
  return (
    <g className="scatter__axes">
      <g>
        <line
          x1={100}
          x2={100}
          y1={0}
          y2={height}
        />
        <text
          dominantBaseline="central"
          textAnchor="middle"
          transform={`rotate(-90, 10, ${yLabelPosition})`}
          x={0}
          y={yLabelPosition}
        >
          {labels.y}
        </text>
      </g>
      <g transform={`translate(0 ${height})`}>
        <line
          x1={100}
          x2={100 + width}
          y1={0}
          y2={0}
        />
        <text
          textAnchor="middle"
          x={100 + (width / 2)}
          y={80}
        >
          {labels.x}
        </text>
      </g>
    </g>
  );
};

Axes.propTypes = {
  height: PropTypes.number.isRequired,
  labels: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default Axes;

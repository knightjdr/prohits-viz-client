import PropTypes from 'prop-types';
import React from 'react';

const LabelY = ({
  axisLength,
  fontSize,
  // handleMouseDown,
  // handleWheel,
  label,
}) => {
  const axisLabelY = (axisLength) / 2;
  return (
    <g>
      <g>
        <g id="plot_yaxis_wheel">
          <rect
            height={axisLength}
            opacity={0}
            width={100}
            x={0}
            y={0}
          />
          <text
            dy={5}
            fontSize={fontSize}
            textAnchor="middle"
            transform={`rotate(-90, 20, ${axisLabelY})`}
            x={20}
            y={axisLabelY}
          >
            {label}
          </text>
        </g>
      </g>
    </g>
  );
};

LabelY.propTypes = {
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  // handleMouseDown: PropTypes.func.isRequired,
  // handleWheel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default LabelY;

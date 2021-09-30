import PropTypes from 'prop-types';
import React from 'react';

const LabelX = ({
  axisLength,
  fontSize,
  // handleMouseDown,
  // handleWheel,
  label,
}) => (
  <g>
    <g
        // onMouseDown={handleMouseDown}
        // onWheel={handleWheel}
      transform={`translate(100 ${axisLength})`}
    >
      <g id="plot_xaxis_wheel">
        <rect
          height={100}
          opacity={0}
          width={axisLength}
          x={0}
          y={0}
        />
      </g>
      <text
        fontSize={fontSize}
        textAnchor="middle"
        x={(axisLength / 2)}
        y={70}
      >
        {label}
      </text>
    </g>
  </g>
);

LabelX.propTypes = {
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  // handleMouseDown: PropTypes.func.isRequired,
  // handleWheel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default LabelX;

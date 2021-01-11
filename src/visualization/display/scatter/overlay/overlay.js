import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const Overlay = forwardRef((
  {
    axisLength,
    coordinates,
    handleMouseDown,
    size,
    strokeWidth,
  },
  ref,
) => (
  <>
    <rect
      height={axisLength}
      onMouseDown={handleMouseDown}
      opacity={0}
      ref={ref}
      width={axisLength}
      x={0}
      y={0}
    />
    <rect
      fillOpacity={0}
      height={size.height}
      pointerEvents="none"
      stroke="#000"
      strokeDasharray={2}
      strokeWidth={strokeWidth}
      width={size.width}
      x={coordinates.x}
      y={coordinates.y}
    />
  </>
));

Overlay.propTypes = {
  axisLength: PropTypes.number.isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Overlay;

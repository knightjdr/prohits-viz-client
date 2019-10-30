import PropTypes from 'prop-types';
import React from 'react';

const SelectionOverlay = ({
  dimensions,
  position,
}) => (
  <rect
    fillOpacity={0}
    height={dimensions.height}
    pointerEvents="none"
    stroke="#000"
    strokeDasharray={2}
    width={dimensions.width}
    x={position.x}
    y={position.y}
  />
);

SelectionOverlay.propTypes = {
  dimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default SelectionOverlay;

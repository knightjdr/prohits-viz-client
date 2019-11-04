import PropTypes from 'prop-types';
import React from 'react';

const SelectionOverlay = ({
  coordinates,
  size,
}) => (
  <rect
    fillOpacity={0}
    height={size.height}
    pointerEvents="none"
    stroke="#000"
    strokeDasharray={2}
    width={size.width}
    x={coordinates.x}
    y={coordinates.y}
  />
);

SelectionOverlay.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default SelectionOverlay;

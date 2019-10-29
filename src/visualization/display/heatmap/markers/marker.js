import PropTypes from 'prop-types';
import React from 'react';

import DeleteMarkup from '../markup/delete-markup';

import './marker.css';

const Marker = ({
  color,
  dimensions,
  handleDeletion,
  timesPosition,
}) => (
  <g className="heatmap__marker">
    <rect
      fillOpacity={0}
      height={dimensions.height}
      stroke={color}
      strokeWidth={2}
      width={dimensions.width}
      x={dimensions.x}
      y={dimensions.y}
    />
    <DeleteMarkup
      onClick={handleDeletion}
      position={timesPosition}
    />
  </g>
);

Marker.propTypes = {
  color: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  handleDeletion: PropTypes.func.isRequired,
  timesPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default Marker;

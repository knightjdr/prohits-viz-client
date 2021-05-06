import PropTypes from 'prop-types';
import React from 'react';

import DeleteMarkup from '../markup/delete-markup';

const Marker = ({
  color,
  dimensions,
  handleDeletion,
  timesPosition,
}) => (
  <g className="heatmap__marker">
    <rect
      className="heatmap__marker-hover-border"
      height={dimensions.height}
      width={dimensions.width}
      x={dimensions.x}
      y={dimensions.y}
    />
    <rect
      height={dimensions.height}
      stroke={color}
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

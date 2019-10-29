import PropTypes from 'prop-types';
import React from 'react';

import './marker.css';

const Marker = ({
  color,
  dimensions,
}) => (
  <div
    className="panel-map__marker"
    style={{
      borderColor: color,
      height: `calc(${dimensions.height * 100}%)`,
      left: `calc(${dimensions.x * 100}%)`,
      top: `calc(${dimensions.y * 100}%)`,
      width: `calc(${dimensions.width * 100}%)`,
    }}
  />
);

Marker.propTypes = {
  color: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default Marker;

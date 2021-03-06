import PropTypes from 'prop-types';
import React from 'react';

import './annotation.css';

const Annotation = ({
  color,
  position,
  text,
}) => (
  <div
    className="panel-map__annotation"
    data-tooltip={text}
    data-tooltip-position="top"
    style={{
      backgroundColor: color,
      left: `calc(${position.x * 100}% - 5px)`,
      top: `calc(${position.y * 100}% - 5px)`,
    }}
  />
);

Annotation.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Annotation;

import PropTypes from 'prop-types';
import React from 'react';

import './annotation.css';

const Annotation = ({
  fontSize,
  handleMouseDown,
  height,
  isMouseDown,
  position,
  text,
  width,
}) => (
  <g>
    <text
      className={isMouseDown ? 'heatmap__annotation_moving' : 'heatmap__annotation'}
      fontSize={fontSize}
      onMouseDown={handleMouseDown}
      textAnchor="middle"
      x={position.x * width}
      y={position.y * height}
    >
      {text}
    </text>
  </g>
);

Annotation.propTypes = {
  fontSize: PropTypes.number.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  isMouseDown: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Annotation;

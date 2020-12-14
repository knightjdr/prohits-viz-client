import PropTypes from 'prop-types';
import React from 'react';

import DeleteMarkup from '../markup/delete-markup';

import './annotation.css';

const defineTextClassName = (isMouseDown) => (
  isMouseDown ? 'heatmap__annotation heatmap__annotation_moving' : 'heatmap__annotation'
);

const Annotation = ({
  fontSize,
  handleDeletion,
  handleMouseDown,
  isMouseDown,
  position,
  text,
  timesPosition,
}) => (
  <g className={defineTextClassName(isMouseDown)}>
    <text
      fontSize={fontSize}
      onMouseDown={handleMouseDown}
      textAnchor="middle"
      x={position.x}
      y={position.y}
    >
      {text}
    </text>
    <DeleteMarkup
      onClick={handleDeletion}
      position={timesPosition}
    />
  </g>
);

Annotation.propTypes = {
  fontSize: PropTypes.number.isRequired,
  handleDeletion: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  isMouseDown: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  text: PropTypes.string.isRequired,
  timesPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Annotation;

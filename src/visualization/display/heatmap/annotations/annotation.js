import PropTypes from 'prop-types';
import React from 'react';

import './annotation.css';

const defineTextClassName = isMouseDown => (
  isMouseDown ? 'heatmap__annotation heatmap__annotation_moving' : 'heatmap__annotation'
);

const Annotation = ({
  fontSize,
  handleDeletion,
  handleMouseDown,
  height,
  isMouseDown,
  position,
  text,
  width,
}) => {
  const className = defineTextClassName(isMouseDown);
  const x = position.x * width;
  const y = position.y * height;
  const deletionX = x - 7;
  const deletionY = y - 9 - fontSize;
  return (
    <g className={className}>
      <text
        fontSize={fontSize}
        onMouseDown={handleMouseDown}
        textAnchor="middle"
        x={x}
        y={y}
      >
        {text}
      </text>
      <g
        className="heatmap__annotation-times"
        onClick={handleDeletion}
        transform={`translate(${deletionX} ${deletionY})`}
      >
        <path
          className="fa-secondary"
          d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M10.4,8.8c0.1,0.1,0.1,0.3,0,0.5c0,0,0,0,0,0l-1.1,1.1
          c-0.1,0.1-0.3,0.1-0.5,0c0,0,0,0,0,0L7,8.6l-1.8,1.9c-0.1,0.1-0.3,0.1-0.5,0c0,0,0,0,0,0L3.6,9.3C3.4,9.2,3.4,9,3.6,8.8c0,0,0,0,0,0
          L5.4,7L3.6,5.2C3.4,5,3.4,4.8,3.6,4.7c0,0,0,0,0,0l1.1-1.1c0.1-0.1,0.3-0.1,0.5,0c0,0,0,0,0,0L7,5.4l1.8-1.9c0.1-0.1,0.3-0.1,0.5,0
          c0,0,0,0,0,0l1.1,1.1c0.1,0.1,0.1,0.3,0,0.5c0,0,0,0,0,0L8.6,7L10.4,8.8z"
        />
        <path
          className="fa-primary"
          d="M10.4,8.8c0.1,0.1,0.1,0.3,0,0.5c0,0,0,0,0,0l-1.1,1.1c-0.1,0.1-0.3,0.1-0.5,0c0,0,0,0,0,0L7,8.6l-1.8,1.9
          c-0.1,0.1-0.3,0.1-0.5,0c0,0,0,0,0,0L3.6,9.3C3.4,9.2,3.4,9,3.6,8.8c0,0,0,0,0,0L5.4,7L3.6,5.2C3.4,5,3.4,4.8,3.6,4.7c0,0,0,0,0,0
          l1.1-1.1c0.1-0.1,0.3-0.1,0.5,0c0,0,0,0,0,0L7,5.4l1.8-1.9c0.1-0.1,0.3-0.1,0.5,0c0,0,0,0,0,0l1.1,1.1c0.1,0.1,0.1,0.3,0,0.5
          c0,0,0,0,0,0L8.6,7L10.4,8.8z"
        />
      </g>
    </g>
  );
};

Annotation.propTypes = {
  fontSize: PropTypes.number.isRequired,
  handleDeletion: PropTypes.func.isRequired,
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

import PropTypes from 'prop-types';
import React from 'react';

import './delete-markup.css';

const DeleteMarkup = ({
  onClick,
  position,
}) => (
  <g
    className="heatmap__markup-times"
    onClick={onClick}
    transform={`translate(${position.x} ${position.y})`}
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
);

DeleteMarkup.propTypes = {
  onClick: PropTypes.func.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeleteMarkup;

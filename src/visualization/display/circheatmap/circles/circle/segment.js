import PropTypes from 'prop-types';
import React from 'react';

const Segment = ({
  attribute,
  fill,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  label,
  path,
  segmentIndex,
}) => (
  <g>
    <path
      className="circheatmap__segment-backdrop"
      d={path}
      fill="#ffffff"
    />
    <path
      className="circheatmap__segment-path"
      d={path}
      data-attribute={attribute}
      data-label={label}
      data-segment-index={segmentIndex}
      fill={fill}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      stroke="#f5f5f5"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </g>
);

Segment.propTypes = {
  attribute: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  segmentIndex: PropTypes.number.isRequired,
};

export default Segment;

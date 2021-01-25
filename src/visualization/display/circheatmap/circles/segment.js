import PropTypes from 'prop-types';
import React from 'react';

const Segment = ({
  attribute,
  handleMouseEnter,
  handleMouseLeave,
  path,
  segment,
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
      data-segment-index={segmentIndex}
      fill={segment.fill}
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
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  segment: PropTypes.shape({
    fill: PropTypes.string,
  }).isRequired,
  segmentIndex: PropTypes.number.isRequired,
};

export default Segment;

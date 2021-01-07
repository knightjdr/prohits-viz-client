import PropTypes from 'prop-types';
import React from 'react';

const Midline = ({
  dashLength,
  isDashed,
  midline,
  strokeWidth,
}) => (
  <line
    className="scatterplot__midline"
    stroke="black"
    strokeDasharray={isDashed ? `${dashLength} ${dashLength}` : null}
    strokeWidth={strokeWidth}
    x1={midline.x1}
    x2={midline.x2}
    y1={midline.y1}
    y2={midline.y2}
  />
);

Midline.propTypes = {
  dashLength: PropTypes.number.isRequired,
  isDashed: PropTypes.bool.isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Midline;

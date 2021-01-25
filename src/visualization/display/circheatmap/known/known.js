import PropTypes from 'prop-types';
import React from 'react';

const Known = ({
  path,
  radius,
}) => (
  <path
    className="known__path"
    d={`
      M ${radius} 0
      A ${radius} ${radius} 0 ${path.arc} 1 ${path.x} ${path.y}
    `}
    fill="none"
    stroke="#000"
    strokeWidth="3"
    transform="scale(0.9 0.9)"
  />
);

Known.propTypes = {
  path: PropTypes.shape({
    arc: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  radius: PropTypes.number.isRequired,
};

export default Known;

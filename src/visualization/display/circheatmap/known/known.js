import PropTypes from 'prop-types';
import React from 'react';

const Known = ({
  path,
  radius,
  sortByKnown,
}) => {
  if (sortByKnown && path.circle) {
    return (
      <circle
        cx={0}
        cy={0}
        fill="none"
        r={radius}
        stroke="#000"
        strokeWidth="5"
        transform="scale(0.9 0.9)"
      />
    );
  } if (sortByKnown) {
    return (
      <path
        className="known__path"
        d={`
          M ${radius} 0
          A ${radius} ${radius} 0 ${path.arc} 1 ${path.x} ${path.y}
        `}
        fill="none"
        stroke="#000"
        strokeWidth="5"
        transform="scale(0.9 0.9)"
      />
    );
  }
  return null;
};

Known.propTypes = {
  path: PropTypes.shape({
    arc: PropTypes.number,
    circle: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  sortByKnown: PropTypes.bool.isRequired,
};

export default Known;

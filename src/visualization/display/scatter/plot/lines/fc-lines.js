import PropTypes from 'prop-types';
import React from 'react';

const Lines = ({
  dashLength,
  isDashed,
  lines,
  strokeWidth,
}) => (
  <>
    {
      lines.map((line) => (
        <line
          className="scatterplot__fc-line"
          key={line.key}
          stroke="black"
          strokeDasharray={isDashed ? `${dashLength} ${dashLength}` : null}
          strokeWidth={strokeWidth}
          x1={line.x1}
          x2={line.x2}
          y1={line.y1}
          y2={line.y2}
        />
      ))
    }
  </>
);

Lines.propTypes = {
  dashLength: PropTypes.number.isRequired,
  isDashed: PropTypes.bool.isRequired,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  ).isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Lines;

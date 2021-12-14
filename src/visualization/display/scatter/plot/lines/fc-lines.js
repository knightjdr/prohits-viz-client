import PropTypes from 'prop-types';
import React from 'react';

const Lines = ({
  dashLength,
  handleFCLineClick,
  isDashed,
  lines,
  strokeWidth,
}) => (
  <>
    {
      lines.map((line) => (
        <g
          data-fc={line.key}
          onClick={handleFCLineClick}
          key={line.key}
        >
          <line
            className="scatterplot__fc-line-background"
            stroke="green"
            strokeOpacity={0}
            strokeWidth={5}
            x1={line.x1}
            x2={line.x2}
            y1={line.y1}
            y2={line.y2}
          />
          <line
            className="scatterplot__fc-line"
            data-fc={line.key}
            stroke="black"
            strokeDasharray={isDashed ? `${dashLength} ${dashLength}` : null}
            strokeWidth={strokeWidth}
            x1={line.x1}
            x2={line.x2}
            y1={line.y1}
            y2={line.y2}
          />
        </g>
      ))
    }
  </>
);

Lines.propTypes = {
  dashLength: PropTypes.number.isRequired,
  handleFCLineClick: PropTypes.func.isRequired,
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

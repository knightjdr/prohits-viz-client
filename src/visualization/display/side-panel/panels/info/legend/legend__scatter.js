import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const ScatterLegend = ({
  legend,
}) => {
  const height = legend.length * 30;
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="200"
      viewBox={`0 0 200 ${height}`}
    >
      {
        legend.map((dot, index) => {
          const y = (index * 30) + 15;
          return (
            <Fragment key={dot.color}>
              <circle
                cx={20}
                cy={y}
                fill={dot.color}
                r={6}
              />
              <text
                dominantBaseline="middle"
                x={35}
                y={y + 1}
              >
                {dot.text}
              </text>
            </Fragment>
          );
        })
      }
    </svg>
  );
};

ScatterLegend.propTypes = {
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default ScatterLegend;

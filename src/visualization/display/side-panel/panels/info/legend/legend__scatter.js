import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const calculateHeight = (customizations, legend) => {
  const points = customizations.length + legend.length;
  return points * 30;
};

const ScatterLegend = ({
  customizations,
  legend,
}) => {
  const height = calculateHeight(customizations, legend);
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="200"
      viewBox={`0 0 200 ${height}`}
    >
      <rect width="100%" height="100%" fill="white" />
      {
        [...legend, ...customizations].map((dot, index) => {
          const yCircle = (index * 30) + 15;
          const yText = (index * 30) + 15 + 4;
          const text = dot.text || dot.label;
          return (
            <Fragment key={text}>
              <circle
                cx={20}
                cy={yCircle}
                fill={dot.color}
                r={6}
              />
              <text
                x={35}
                y={yText}
              >
                {text}
              </text>
            </Fragment>
          );
        })
      }
    </svg>
  );
};

ScatterLegend.propTypes = {
  customizations: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default ScatterLegend;

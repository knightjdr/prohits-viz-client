import PropTypes from 'prop-types';
import React from 'react';

import colorGradient from '../../../../../../utils/color/initialize-color-gradient';

const CircHeatmapLegend = ({
  legend,
  showKnown,
}) => {
  const height = (legend.length * 50) + 80;
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="210"
      viewBox={`0 0 210 ${height}`}
    >
      <g transform="translate(0 10)">

        {
          legend.map((circle, index) => {
            const gradientFill = colorGradient(circle.color, 101, false);
            const numColors = gradientFill.length;
            const halfColorIndex = Math.floor(numColors / 2);
            return (
              <g
                key={circle.name}
                transform={`translate(0 ${index * 50})`}
              >
                <defs>
                  <linearGradient id={`${circle.name}-legendGradient`}>
                    <stop offset="0%" stopColor={gradientFill[0]} />
                    <stop offset="50%" stopColor={gradientFill[halfColorIndex]} />
                    <stop offset="100%" stopColor={gradientFill[numColors - 1]} />
                  </linearGradient>
                </defs>
                <g>
                  <text x="100" y="20" textAnchor="middle">
                    {circle.name}
                  </text>
                  <rect x="25" y="30" height="20" width="150" fill={`url('#${circle.name}-legendGradient')`} />
                  <text x="13" y="45" textAnchor="right">
                    {circle.min}
                  </text>
                  <text x="180" y="45" textAnchor="left">
                    {circle.max}
                  </text>
                </g>
              </g>
            );
          })
        }
        {
          showKnown
          && (
            <g transform={`translate(0 ${height - 50})`}>
              <text
                textAnchor="middle"
                x="100"
                y="0"
              >
                Known
              </text>
              <line
                stroke="black"
                strokeWidth="3"
                x1="50"
                x2="150"
                y1="10"
                y2="10"
              />
            </g>
          )
        }
      </g>
    </svg>
  );
};

CircHeatmapLegend.propTypes = {
  legend: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      max: PropTypes.number,
      min: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  showKnown: PropTypes.bool.isRequired,
};

export default CircHeatmapLegend;

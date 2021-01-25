import PropTypes from 'prop-types';
import React from 'react';

import colorGradient from '../../../../../../utils/color/initialize-color-gradient';

const CircHeatmapLegend = ({
  legend,
  segmentOrder,
  showKnown,
}) => {
  const height = (segmentOrder.length * 70) + 70;
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="200"
      viewBox={`0 0 200 ${height}`}
    >
      <g transform="translate(0 10)">

        {
          legend.map((setting, index) => {
            const gradientFill = colorGradient(setting.color, 101, false);
            const name = segmentOrder[index];
            const numColors = gradientFill.length;
            const halfColorIndex = Math.floor(numColors / 2);
            return (
              <g
                key={name}
                transform={`translate(0 ${index * 70})`}
              >
                <defs>
                  <linearGradient id={`${name}-legendGradient`}>
                    <stop offset="0%" stopColor={gradientFill[0]} />
                    <stop offset="50%" stopColor={gradientFill[halfColorIndex]} />
                    <stop offset="100%" stopColor={gradientFill[numColors - 1]} />
                  </linearGradient>
                </defs>
                <g>
                  <text x="100" y="20" textAnchor="middle">
                    {setting.name}
                  </text>
                  <rect x="25" y="30" height="20" width="150" fill={`url('#${name}-legendGradient')`} />
                  <text x="25" y="65" textAnchor="middle">
                    {setting.min}
                  </text>
                  <text x="175" y="65" textAnchor="middle">
                    {setting.max}
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
    }),
  ).isRequired,
  segmentOrder: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  showKnown: PropTypes.bool.isRequired,
};

export default CircHeatmapLegend;

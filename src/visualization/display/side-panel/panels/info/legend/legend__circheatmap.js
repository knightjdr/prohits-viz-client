import PropTypes from 'prop-types';
import React from 'react';

import colorGradient from '../../../../../../utils/color/color-gradient';

const CircHeatmapLegend = ({
  known,
  circHeatmapSettings,
  segments,
}) => {
  const height = (circHeatmapSettings.length * 70) + 60;
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width="200"
      viewBox={`0 0 200 ${height}`}
    >
      {
        circHeatmapSettings.map((setting, index) => {
          const gradientFill = colorGradient(setting.color, 101, false);
          const { name } = segments[index];
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
                  {name}
                </text>
                <rect x="25" y="30" height="20" width="150" fill={`url('#${name}-legendGradient')`} />
                <text x="25" y="65" textAnchor="middle">
                  {setting.minAbundance}
                </text>
                <text x="175" y="65" textAnchor="middle">
                  {setting.abundanceCap}
                </text>
              </g>
            </g>
          );
        })
      }
      {
        known
        && (
          <g transform={`translate(0 ${height - 40})`}>
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
    </svg>
  );
};

CircHeatmapLegend.propTypes = {
  known: PropTypes.bool.isRequired,
  circHeatmapSettings: PropTypes.arrayOf(
    PropTypes.shape({
      abundanceCap: PropTypes.number,
      color: PropTypes.string,
      minAbundance: PropTypes.number,
    }),
  ).isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      abundanceCap: PropTypes.number,
      color: PropTypes.string,
      minAbundance: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CircHeatmapLegend;

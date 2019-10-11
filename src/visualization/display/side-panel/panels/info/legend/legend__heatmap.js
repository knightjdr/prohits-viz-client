import PropTypes from 'prop-types';
import React from 'react';

import colorGradient from '../../../../../../utils/color/initialize-color-gradient';

const HeatmapLegend = ({
  abundanceCap,
  abundanceColumn,
  fillColor,
  invertColor,
  minAbundance,
}) => {
  const gradientFill = colorGradient(fillColor, 101, invertColor);
  const numColors = gradientFill.length;
  const halfColorIndex = Math.floor(numColors / 2);
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height="80"
      width="200"
      viewBox="0 0 200 80"
    >
      <defs>
        <linearGradient id="legendGradient">
          <stop offset="0%" stopColor={gradientFill[0]} />
          <stop offset="50%" stopColor={gradientFill[halfColorIndex]} />
          <stop offset="100%" stopColor={gradientFill[numColors - 1]} />
        </linearGradient>
      </defs>
      <g>
        <text x="100" y="20" textAnchor="middle">
          {abundanceColumn}
        </text>
        <rect x="25" y="30" height="20" width="150" fill="url('#legendGradient')" />
        <text x="25" y="65" textAnchor="middle">
          {minAbundance}
        </text>
        <text x="175" y="65" textAnchor="middle">
          {abundanceCap}
        </text>
      </g>
    </svg>
  );
};

HeatmapLegend.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  abundanceColumn: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  invertColor: PropTypes.bool.isRequired,
  minAbundance: PropTypes.number.isRequired,
};

export default HeatmapLegend;

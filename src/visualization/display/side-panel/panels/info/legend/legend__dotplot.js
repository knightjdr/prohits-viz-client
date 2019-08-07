import PropTypes from 'prop-types';
import React from 'react';

import colorGradient from '../../../../../../utils/color/color-gradient';
import scoreEntities from './legend__score-entities';

const DotplotLegend = ({
  abundanceCap,
  abundanceColumn,
  edgeColor,
  fillColor,
  invertColor,
  minAbundance,
  primaryFilter,
  scoreColumn,
  scoreType,
  secondaryFilter,
}) => {
  const gradientEdge = colorGradient(edgeColor, 101, invertColor);
  const gradientFill = colorGradient(fillColor, 101, invertColor);
  const numColors = gradientFill.length;
  const halfColorIndex = Math.floor(numColors / 2);
  const quarterColorIndex = Math.floor(numColors / 4);
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height="250"
      width="200"
      viewBox="0 0 200 250"
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
      <g>
        <circle fill={gradientFill[numColors - 1]} cy="100" cx="60" r="6" />
        <circle fill={gradientFill[numColors - 1]} cy="100" cx="135" r="12" />
        <line fill="none" stroke="#000000" strokeWidth="1" x1="70" y1="100" x2="119" y2="100" />
        <polygon fill="#000000" points="110,96 112,100 110,104 119,100" />
        <text y="130" x="100" fontSize="12" textAnchor="middle">
          Relative abundance
        </text>
      </g>
      <g>
        <text y="230" x="100" textAnchor="middle">
          {scoreColumn}
        </text>
        <circle
          cx="50"
          cy="175"
          fill="none"
          r="12"
          stroke={gradientEdge[numColors - 1]}
          strokeWidth="2"
        />
        <text y="205" x="50" textAnchor="middle">
          {scoreEntities[scoreType].primary}
          {' '}
          {primaryFilter}
        </text>
        <circle
          cx="100"
          cy="175"
          fill="none"
          r="12"
          stroke={gradientEdge[halfColorIndex]}
          strokeWidth="2"
        />
        <text y="205" x="100" textAnchor="middle">
          {scoreEntities[scoreType].secondary}
          {' '}
          {secondaryFilter}
        </text>
        <circle
          fill="none"
          cx="150"
          cy="175"
          r="12"
          stroke={gradientEdge[quarterColorIndex]}
          strokeWidth="2"
        />
        <text y="205" x="150" textAnchor="middle">
          {scoreEntities[scoreType].other}
          {' '}
          {secondaryFilter}
        </text>
      </g>
    </svg>
  );
};

DotplotLegend.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  abundanceColumn: PropTypes.string.isRequired,
  edgeColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  invertColor: PropTypes.bool.isRequired,
  minAbundance: PropTypes.number.isRequired,
  primaryFilter: PropTypes.number.isRequired,
  scoreColumn: PropTypes.string.isRequired,
  scoreType: PropTypes.string.isRequired,
  secondaryFilter: PropTypes.number.isRequired,
};

export default DotplotLegend;

import PropTypes from 'prop-types';
import React from 'react';

import Points from './points';

import './plot.css';

const Plot = ({
  axisLength,
  customization,
  fontSize,
  handleClickLabel,
  handleMouseDown,
  handleWheel,
  labels,
  points,
  searchLabels,
  transform,
}) => (
  <g
    className="scatter__plot"
    onMouseDown={handleMouseDown}
    onWheel={handleWheel}
    transform="translate(100 0)"
  >
    <defs>
      <clipPath id="plot_points_clip">
        <rect
          height={axisLength + 20}
          width={axisLength + 20}
          x={0}
          y={-20}
        />
      </clipPath>
    </defs>
    <g id="plot_points_wheel">
      <rect
        height={axisLength}
        opacity={0}
        width={axisLength}
        x={0}
        y={0}
      />
    </g>
    <g clipPath="url(#plot_points_clip)">
      <g transform={transform.matrix.plot}>
        <Points
          axisLength={axisLength}
          customization={customization}
          fontSize={fontSize}
          handleClickLabel={handleClickLabel}
          labels={labels}
          searchLabels={searchLabels}
          points={points}
          scale={transform.scale}
        />
      </g>
    </g>
  </g>
);

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  customization: PropTypes.shape({}).isRequired,
  fontSize: PropTypes.number.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
  labels: PropTypes.shape({}).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  searchLabels: PropTypes.shape({}).isRequired,
  transform: PropTypes.shape({
    matrix: PropTypes.shape({
      plot: PropTypes.string,
    }),
    scale: PropTypes.number,
  }).isRequired,
};

export default Plot;

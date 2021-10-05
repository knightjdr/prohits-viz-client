import PropTypes from 'prop-types';
import React from 'react';
import OverlayContainer from '../overlay/overlay-container';

import Axes from './axes/axes-container';
import Lines from './lines/lines-container';
import Points from './points';

const Plot = ({
  axisLength,
  customization,
  fontSize,
  handleClickLabel,
  handleMouseDown,
  handleWheel,
  labels,
  lines,
  points,
  radius,
  searchLabels,
  ticks,
  transform,
}) => (
  axisLength > 0
  && (
    <g
      className="scatter__plot"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      transform="translate(100 0)"
    >
      <defs>
        <clipPath id="plot_axis_clip">
          <rect
            height={axisLength + 50}
            width={axisLength + 80}
            x={-50}
            y={-10}
          />
        </clipPath>
        <clipPath id="plot_points_clip">
          <rect
            height={axisLength}
            width={axisLength}
            x={0}
            y={0}
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
      <g clipPath="url(#plot_axis_clip)">
        <g transform={transform.matrix.plot}>
          <Axes
            axes={lines.axes}
            ticks={ticks}
          />
        </g>
      </g>
      <g clipPath="url(#plot_points_clip)">
        <g transform={transform.matrix.plot}>
          <OverlayContainer />
          <Lines
            fcLines={lines.fcLines}
            midline={lines.midline}
            scale={transform.scale}
          />
          <Points
            axisLength={axisLength}
            customization={customization}
            fontSize={fontSize}
            handleClickLabel={handleClickLabel}
            labels={labels}
            radius={radius}
            searchLabels={searchLabels}
            points={points}
            scale={transform.scale}
          />
        </g>
      </g>
    </g>
  )
);

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  customization: PropTypes.shape({}).isRequired,
  fontSize: PropTypes.number.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
  labels: PropTypes.shape({}).isRequired,
  lines: PropTypes.shape({
    axes: PropTypes.shape({
      x: PropTypes.shape({
        x1: PropTypes.number,
        x2: PropTypes.number,
        y1: PropTypes.number,
        y2: PropTypes.number,
      }),
      y: PropTypes.shape({
        x1: PropTypes.number,
        x2: PropTypes.number,
        y1: PropTypes.number,
        y2: PropTypes.number,
      }),
    }).isRequired,
    fcLines: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        x1: PropTypes.number,
        x2: PropTypes.number,
        y1: PropTypes.number,
        y2: PropTypes.number,
      }),
    ),
    midline: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  }).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  radius: PropTypes.number.isRequired,
  searchLabels: PropTypes.shape({}).isRequired,
  ticks: PropTypes.shape({
    x: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
    y: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        y: PropTypes.number,
      }),
    ),
  }).isRequired,
  transform: PropTypes.shape({
    matrix: PropTypes.shape({
      plot: PropTypes.string,
    }),
    scale: PropTypes.number,
  }).isRequired,
};

export default Plot;

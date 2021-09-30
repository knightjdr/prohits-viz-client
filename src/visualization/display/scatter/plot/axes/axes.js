import PropTypes from 'prop-types';
import React from 'react';

import XAxis from './x-axis';
import YAxis from './y-axis';

const Axes = ({
  axes,
  axisLength,
  fontSize,
  ticks,
  transform,
}) => {
  const { scale } = transform;
  const scaledFontSize = fontSize / scale;
  const strokeWidth = 2 / scale;
  return (
    <g>
      <XAxis
        axisLength={axisLength}
        fontSize={scaledFontSize}
        line={axes.x}
        scale={scale}
        strokeWidth={strokeWidth}
        ticks={ticks.x}
        transform={transform.matrix.plot}
      />
      <YAxis
        axisLength={axisLength}
        fontSize={scaledFontSize}
        line={axes.y}
        scale={scale}
        strokeWidth={strokeWidth}
        ticks={ticks.y}
        transform={transform.matrix.plot}
      />
    </g>
  );
};

Axes.propTypes = {
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
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
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

export default Axes;

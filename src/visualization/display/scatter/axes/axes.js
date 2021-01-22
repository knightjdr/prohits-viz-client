import PropTypes from 'prop-types';
import React from 'react';

import AxisX from './axis-x';
import AxisY from './axis-y';

const Axes = ({
  fontSize,
  handleMouseDownX,
  handleMouseDownY,
  handleWheelX,
  handleWheelY,
  height,
  labels,
  ticks,
  transform,
  width,
}) => (
  height > 0
  && width > 0
  && (
    <g className="scatter__axes">
      <AxisX
        axisLength={width}
        fontSize={fontSize}
        handleMouseDown={handleMouseDownX}
        handleWheel={handleWheelX}
        label={labels.x}
        scale={transform.scale}
        ticks={ticks.x}
        transform={transform.matrix.xAxis}
      />
      <AxisY
        axisLength={height}
        fontSize={fontSize}
        handleMouseDown={handleMouseDownY}
        handleWheel={handleWheelY}
        label={labels.y}
        scale={transform.scale}
        ticks={ticks.y}
        transform={transform.matrix.yAxis}
      />
    </g>
  )
);

Axes.propTypes = {
  fontSize: PropTypes.number.isRequired,
  handleMouseDownX: PropTypes.func.isRequired,
  handleMouseDownY: PropTypes.func.isRequired,
  handleWheelX: PropTypes.func.isRequired,
  handleWheelY: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  labels: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  ticks: PropTypes.shape({
    x: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
        x: PropTypes.number,
      }),
    ),
    y: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
        y: PropTypes.number,
      }),
    ),
  }).isRequired,
  transform: PropTypes.shape({
    matrix: PropTypes.shape({
      xAxis: PropTypes.string,
      yAxis: PropTypes.string,
    }),
    scale: PropTypes.number,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default Axes;

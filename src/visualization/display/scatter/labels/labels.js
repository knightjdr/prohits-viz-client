import PropTypes from 'prop-types';
import React from 'react';

import LabelX from './label-x';
import LabelY from './label-y';

const Labels = ({
  fontSize,
  handleMouseDownX,
  handleMouseDownY,
  handleWheelX,
  handleWheelY,
  height,
  labels,
  width,
}) => (
  height > 0
  && width > 0
  && (
    <g className="scatter__axes">
      <LabelX
        axisLength={height}
        fontSize={fontSize}
        handleMouseDown={handleMouseDownX}
        handleWheel={handleWheelX}
        label={labels.x}
      />
      <LabelY
        axisLength={width}
        fontSize={fontSize}
        handleMouseDown={handleMouseDownY}
        handleWheel={handleWheelY}
        label={labels.y}
      />
    </g>
  )
);

Labels.propTypes = {
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
  width: PropTypes.number.isRequired,
};

export default Labels;

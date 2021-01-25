import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Circles from './circles/circles-container';
import Known from './known/known-container';

import './circheatmap.css';

const CircHeatmap = forwardRef((
  {
    plot,
    radius,
    svgHeight,
    svgWidth,
    translation,
  },
  ref,
) => (
  <div
    className="circheatmap"
    ref={ref}
    style={{
      transform: `translate(${translation}px)`,
    }}
  >
    <svg
      id="svg-main"
      height={svgHeight}
      width={svgWidth}
      viewBox={`-${radius} -${radius} ${svgWidth} ${svgHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g transform="rotate(-90)">
        <Known
          radius={radius}
          readouts={plot.readouts}
        />
        <Circles
          radius={radius}
          readouts={plot.readouts}
        />
      </g>
    </svg>
  </div>
));

CircHeatmap.propTypes = {
  plot: PropTypes.shape({
    readouts: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  svgWidth: PropTypes.number.isRequired,
  translation: PropTypes.number.isRequired,
};

export default CircHeatmap;

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Circles from './circles/circles-container';
import Known from './known/known-container';

import './circheatmap.css';

const CircHeatmap = forwardRef((
  {
    dimensions,
    plot,
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
      height={dimensions.svg}
      width={dimensions.svg}
      viewBox={`-${dimensions.halfSvg} -${dimensions.halfSvg} ${dimensions.svg} ${dimensions.svg}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g transform="rotate(-90)">
        <Known
          radius={dimensions.radius}
          readouts={plot.readouts}
        />
        <Circles
          radius={dimensions.radius}
          readouts={plot.readouts}
        />
      </g>
    </svg>
  </div>
));

CircHeatmap.propTypes = {
  dimensions: PropTypes.shape({
    halfSvg: PropTypes.number,
    radius: PropTypes.number,
    svg: PropTypes.number,
  }).isRequired,
  plot: PropTypes.shape({
    readouts: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
  }).isRequired,
  translation: PropTypes.number.isRequired,
};

export default CircHeatmap;

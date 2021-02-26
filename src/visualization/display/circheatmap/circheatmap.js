import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Circles from './circles/circles-container';
import Known from './known/known-container';

import './circheatmap.css';

const CircHeatmap = forwardRef((
  {
    dimensions,
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
    {
      dimensions.svgHeight
      && (
      <svg
        id="svg-main"
        height={dimensions.svgHeight}
        width={dimensions.svgWidth}
        viewBox={`-${dimensions.center.x} -${dimensions.center.y} ${dimensions.svgWidth} ${dimensions.svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill="white"
          height="100%"
          width="100%"
          transform={`translate(-${dimensions.center.x} -${dimensions.center.y})`}
        />
        <g transform="rotate(-90)">
          <Known />
          <Circles />
        </g>
      </svg>
      )
    }
  </div>
));

CircHeatmap.propTypes = {
  dimensions: PropTypes.shape({
    center: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    svgHeight: PropTypes.number,
    svgWidth: PropTypes.number,
  }).isRequired,
  translation: PropTypes.number.isRequired,
};

export default CircHeatmap;

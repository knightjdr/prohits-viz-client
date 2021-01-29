import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Circles from './circles/circles-container';
import Known from './known/known-container';

import './circheatmap.css';

const CircHeatmap = forwardRef((
  {
    dimensions,
    readouts,
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
        <g transform="rotate(-90)">
          <Known readouts={readouts} />
          <Circles readouts={readouts} />
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
  readouts: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  translation: PropTypes.number.isRequired,
};

export default CircHeatmap;

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Labels from './labels/labels-container';
import Plot from './plot/plot-container';

import './scatter.css';

const Scatter = forwardRef((
  {
    lines,
    points,
    ticks,
    translation,
    wrapperHeight,
    wrapperWidth,
  },
  ref,
) => (
  <div
    className="scatter"
    ref={ref}
    style={{
      transform: `translate(${translation}px)`,
    }}
  >
    <svg
      id="svg-main"
      height={wrapperHeight}
      width={wrapperWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g transform="translate(0 50)">
        <Plot
          lines={lines}
          points={points}
          ticks={ticks}
        />
        <Labels />
      </g>
    </svg>
  </div>
));

Scatter.displayName = 'Scatter';
Scatter.propTypes = {
  lines: PropTypes.shape({
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
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  ticks: PropTypes.shape({
    x: PropTypes.arrayOf(PropTypes.shape({})),
    y: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  translation: PropTypes.number.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
};

export default Scatter;

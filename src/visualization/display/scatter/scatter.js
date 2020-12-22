import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Axes from './axes/axes-container';
import Plot from './plot/plot-container';

import './scatter.css';

const Scatter = forwardRef((
  {
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
      <g transform="translate(0 50)">
        <Plot points={points} />
        <Axes ticks={ticks} />
      </g>
    </svg>
  </div>
));

Scatter.propTypes = {
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

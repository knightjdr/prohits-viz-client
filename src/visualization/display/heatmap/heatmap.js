import PropTypes from 'prop-types';
import React from 'react';

import Grid from './grid/grid-container';

import './heatmap.css';

const Heatmap = ({
  gridHeight,
  gridWidth,
  translation,
  wrapperHeight,
  wrapperWidth,
}) => (
  <div
    className="heatmap"
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
      <clipPath id="clipPath">
        <rect
          height={gridHeight}
          width={gridWidth}
          x="0"
          y="0"
        />
      </clipPath>
      <Grid />
    </svg>
  </div>
);

Heatmap.propTypes = {
  gridHeight: PropTypes.number.isRequired,
  gridWidth: PropTypes.number.isRequired,
  translation: PropTypes.number.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
};

export default Heatmap;

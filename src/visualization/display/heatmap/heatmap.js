import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Columns from './columns/columns-container';
import Grid from './grid/grid-container';

import './heatmap.css';

const Heatmap = forwardRef((
  {
    translation,
    wrapperHeight,
    wrapperWidth,
  },
  ref,
) => (
  <div
    className="heatmap"
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
      <Columns />
      <Grid />
    </svg>
  </div>
));

Heatmap.propTypes = {
  translation: PropTypes.number.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
};

export default Heatmap;

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Annotations from './annotations/annotations-container';
import Columns from './columns/columns-container';
import Grid from './grid/grid-container';
import NavControls from './nav-controls/nav-controls-container';
import Rows from './rows/rows-container';

import './heatmap.css';

const Heatmap = forwardRef((
  {
    showHorizontalArrows,
    showVerticalArrows,
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
      <Rows />
      <Grid />
      <Annotations />
    </svg>
    <NavControls
      direction="vertical"
      offsetVertical={showHorizontalArrows}
      show={showVerticalArrows}
    />
    <NavControls
      direction="horizontal"
      show={showHorizontalArrows}
    />
  </div>
));

Heatmap.propTypes = {
  showHorizontalArrows: PropTypes.bool.isRequired,
  showVerticalArrows: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
};

export default Heatmap;

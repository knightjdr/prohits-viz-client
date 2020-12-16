import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Axes from './axes/axes-container';

import './scatter.css';

const Scatter = forwardRef((
  {
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
      <Axes />
    </svg>
  </div>
));

Scatter.propTypes = {
  translation: PropTypes.number.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  wrapperWidth: PropTypes.number.isRequired,
};

export default Scatter;

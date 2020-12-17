import PropTypes from 'prop-types';
import React from 'react';

import Axes from './axes/axes-container';

const Plot = ({
  ticks,
}) => (
  <g transform="translate(0 20)">
    <Axes ticks={ticks} />
  </g>
);

Plot.propTypes = {
  ticks: PropTypes.shape({
    x: PropTypes.arrayOf(PropTypes.shape({})),
    y: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Plot;

import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';

const Lines = ({
  dashLength,
  isDashed,
  midline,
  showMidline,
  strokeWidth,
}) => (
  <>
    {
      showMidline
      && (
        <Midline
          dashLength={dashLength}
          isDashed={isDashed}
          midline={midline}
          strokeWidth={strokeWidth}
        />
      )
    }
  </>
);

Lines.propTypes = {
  dashLength: PropTypes.number.isRequired,
  isDashed: PropTypes.bool.isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  showMidline: PropTypes.bool.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Lines;

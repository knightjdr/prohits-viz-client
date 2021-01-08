import PropTypes from 'prop-types';
import React from 'react';

import FcLines from './fc-lines';
import Midline from './midline';

const Lines = ({
  dashLength,
  fcLines,
  isDashed,
  midline,
  showFcLines,
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
    {
      showFcLines
      && (
        <FcLines
          dashLength={dashLength}
          isDashed={isDashed}
          lines={fcLines}
          strokeWidth={strokeWidth}
        />
      )
    }
  </>
);

Lines.propTypes = {
  dashLength: PropTypes.number.isRequired,
  fcLines: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  ).isRequired,
  isDashed: PropTypes.bool.isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  showFcLines: PropTypes.bool.isRequired,
  showMidline: PropTypes.bool.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};

export default Lines;

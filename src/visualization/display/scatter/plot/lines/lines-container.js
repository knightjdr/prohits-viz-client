import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Lines from './lines';

import { selectData } from '../../../../../state/selector/visualization/data-selector';

const LinesContainer = ({
  fcLines,
  midline,
  scale,
}) => {
  const {
    dashLength,
    isDashed,
    showFcLines,
    showMidline,
  } = useSelector((state) => selectData(state, 'lines'));

  const dash = dashLength / scale;
  const strokeWidth = 1 / scale;

  return (
    <Lines
      dashLength={dash}
      fcLines={fcLines}
      isDashed={isDashed}
      midline={midline}
      showFcLines={showFcLines}
      showMidline={showMidline}
      strokeWidth={strokeWidth}
    />
  );
};

LinesContainer.propTypes = {
  fcLines: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  ).isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  scale: PropTypes.number.isRequired,
};

export default LinesContainer;

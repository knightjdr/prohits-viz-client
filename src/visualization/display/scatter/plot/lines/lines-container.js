import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Lines from './lines';

import { selectData } from '../../../../../state/selector/visualization/data-selector';

const LinesContainer = ({
  midline,
  scale,
}) => {
  const { dashLength, isDashed, showMidline } = useSelector((state) => selectData(state, 'lines'));

  const dash = dashLength / scale;
  const strokeWidth = 1 / scale;

  return (
    <Lines
      dashLength={dash}
      isDashed={isDashed}
      midline={midline}
      showMidline={showMidline}
      strokeWidth={strokeWidth}
    />
  );
};

LinesContainer.propTypes = {
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  scale: PropTypes.number.isRequired,
};

export default LinesContainer;

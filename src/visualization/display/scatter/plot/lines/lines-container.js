import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lines from './lines';

import getPointsPassingFC from './get-points-passing-fc';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../../state/visualization/analysis/poi-actions';

const LinesContainer = ({
  fcLines,
  midline,
  scale,
}) => {
  const dispatch = useDispatch();

  const { dashLength, isDashed, showFcLines, showMidline } = useSelector((state) => selectData(state, 'lines'));
  const { logBase, logX, logY } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const points = useSelector((state) => selectDataProperty(state, 'points', 'current'));

  const handleFCLineClick = (e) => {
    const { dataset } = e.currentTarget;
    const { fc } = dataset;
    const selectedPoints = getPointsPassingFC(fc, points);
    dispatch(updatePOI({ points: selectedPoints }));
  };

  const dash = dashLength / scale;
  const strokeWidth = 1 / scale;

  const showLines = logBase === 'none' || logX === logY;

  return (
    showLines
      ? (
        <Lines
          dashLength={dash}
          fcLines={fcLines}
          isDashed={isDashed}
          handleFCLineClick={handleFCLineClick}
          midline={midline}
          showFcLines={showFcLines}
          showMidline={showMidline}
          strokeWidth={strokeWidth}
        />
        )
      : null
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

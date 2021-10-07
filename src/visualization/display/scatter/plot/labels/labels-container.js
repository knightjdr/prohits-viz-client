import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Labels from './labels';

import definePointsToLabel from './define-points-to-label';
import { selectDataProperty } from '../../../../../state/selector/visualization/data-selector';

const LabelsContainer = ({
  customization,
  points,
}) => {
  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const labels = useSelector((state) => selectDataProperty(state, 'labels', 'status'));
  const searchLabels = useSelector((state) => selectDataProperty(state, 'searchStatus', 'labels'));
  const { fontSize, radius } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { scale } = useSelector((state) => selectDataProperty(state, 'display', 'transform'));

  const pointsToLabel = useMemo(
    () => definePointsToLabel({
      axisLength,
      customization,
      fontSize,
      radius,
      points,
      labels,
      scale,
      searchLabels,
    }),
    [
      axisLength,
      customization,
      fontSize,
      labels,
      points,
      radius,
      scale,
      searchLabels,
    ],
  );

  return (
    <Labels
      labels={pointsToLabel}
    />
  );
};

LabelsContainer.propTypes = {
  customization: PropTypes.shape({}).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default LabelsContainer;

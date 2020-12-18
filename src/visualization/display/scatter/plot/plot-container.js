import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Plot from './plot';

import handlers from '../transform/event-handlers';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../state/visualization/settings/display-actions';
import { updateLabel } from '../../../../state/visualization/scatter/label-actions';

const PlotContainer = ({
  points,
}) => {
  const dispatch = useDispatch();

  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const labels = useSelector((state) => selectData(state, 'labels'));
  const transform = useSelector((state) => selectDataProperty(state, 'display', 'transform'));

  const setTransform = (value) => {
    dispatch(updateDisplaySetting('transform', value));
  };

  const handleClickLabel = (e) => {
    const { label } = e.target.dataset;
    dispatch(updateLabel(label));
  };

  const handleMouseDown = (e) => {
    const options = { setTransform, transform };
    handlers.pan(e, options);
  };

  const handleWheel = (e) => {
    const options = {
      id: '#plot_points_wheel',
      setTransform,
      transform,
    };
    handlers.zoom(e, options);
  };

  return (
    <Plot
      axisLength={axisLength}
      handleClickLabel={handleClickLabel}
      handleMouseDown={handleMouseDown}
      handleWheel={handleWheel}
      labels={labels}
      points={points}
      transform={transform}
    />
  );
};

PlotContainer.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default PlotContainer;

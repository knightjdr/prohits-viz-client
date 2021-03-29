import PropTypes from 'prop-types';
import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Plot from './plot';

import handlers from '../transform/event-handlers';
import removeDuplicates from '../../../../utils/remove-duplicates';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../state/visualization/settings/display-actions';
import { updateLabel } from '../../../../state/visualization/scatter/label-actions';
import { updatePOI } from '../../../../state/visualization/analysis/poi-actions';

const PlotContainer = ({
  lines,
  points,
}) => {
  const dispatch = useDispatch();

  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const customization = useSelector((state) => selectDataProperty(state, 'customization', 'points'));
  const labels = useSelector((state) => selectDataProperty(state, 'labels', 'status'));
  const poi = useSelector((state) => selectData(state, 'poi'));
  const searchLabels = useSelector((state) => selectDataProperty(state, 'searchStatus', 'labels'));
  const transform = useSelector((state) => selectDataProperty(state, 'display', 'transform'));
  const { fontSize } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const setTransform = (value) => {
    dispatch(updateDisplaySetting('transform', value));
  };

  const handleClickLabel = (e) => {
    const { index, label } = e.target.dataset;
    const numIndex = Number(index);
    const removePoi = Boolean(labels[label]);
    const updatedPOI = {
      points: removePoi
        ? poi.points.filter((point) => point !== numIndex)
        : removeDuplicates([...poi.points, numIndex]),
    };
    batch(() => {
      dispatch(updateLabel(label));
      dispatch(updatePOI(updatedPOI));
    });
  };

  const handleMouseDown = (e) => {
    const { shiftKey } = e;
    if (!shiftKey) {
      const options = { setTransform, transform };
      handlers.pan(e, options);
    }
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
      customization={customization}
      fontSize={fontSize}
      handleClickLabel={handleClickLabel}
      handleMouseDown={handleMouseDown}
      handleWheel={handleWheel}
      labels={labels}
      lines={lines}
      points={points}
      searchLabels={searchLabels}
      transform={transform}
    />
  );
};

PlotContainer.propTypes = {
  lines: PropTypes.shape({
    fcLines: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        x1: PropTypes.number,
        x2: PropTypes.number,
        y1: PropTypes.number,
        y2: PropTypes.number,
      }),
    ),
    midline: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  }).isRequired,
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

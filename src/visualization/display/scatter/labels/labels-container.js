import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Labels from './labels';

import handlers from '../transform/event-handlers';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../../state/selector/visualization/scatter-selector';
import { updateDisplaySetting } from '../../../../state/visualization/settings/display-actions';

const LabelsContainer = () => {
  const dispatch = useDispatch();

  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const plot = useSelector((state) => selectPlot(state));
  const transform = useSelector((state) => selectDataProperty(state, 'display', 'transform'));
  const { fontSize } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const setTransform = (value) => {
    dispatch(updateDisplaySetting('transform', value));
  };

  const handleMouseDownX = (e) => {
    const options = {
      setTransform,
      transform,
      vertex: 'x',
    };
    handlers.pan(e, options);
  };

  const handleMouseDownY = (e) => {
    const options = {
      setTransform,
      transform,
      vertex: 'y',
    };
    handlers.pan(e, options);
  };

  const handleWheelX = (e) => {
    const options = {
      id: '#plot_xaxis_wheel',
      setTransform,
      transform,
      vertex: 'x',
    };
    handlers.zoom(e, options);
  };

  const handleWheelY = (e) => {
    const options = {
      id: '#plot_yaxis_wheel',
      setTransform,
      transform,
      vertex: 'y',
    };
    handlers.zoom(e, options);
  };

  const labelFontSize = fontSize * (4 / 3);

  return (
    <Labels
      fontSize={labelFontSize}
      handleMouseDownX={handleMouseDownX}
      handleMouseDownY={handleMouseDownY}
      handleWheelX={handleWheelX}
      handleWheelY={handleWheelY}
      height={dimensions.height}
      labels={plot.labels}
      width={dimensions.width}
    />
  );
};

export default LabelsContainer;

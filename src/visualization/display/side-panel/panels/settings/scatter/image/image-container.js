import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from './image';

import handlers from '../../../../../scatter/transform/event-handlers';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../../../state/selector/general';
import { changePlot, updateDisplaySetting } from '../../../../../../../state/visualization/settings/display-actions';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const ImageContainer = () => {
  const dispatch = useDispatch();

  const plots = useSelector((state) => selectState(state, 'plots'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { selectedPlot, transform } = useSelector((state) => selectData(state, 'display'));
  const { equalScaleAxes, fontSize, logBase } = settings;

  const plotNames = useMemo(
    () => plots.map((plot) => plot.name),
    [plots],
  );

  const handlePlotChange = (e, name, value) => {
    const index = plotNames.indexOf(value);
    if (index !== selectedPlot) {
      dispatch(changePlot(index));
    }
  };

  const handleSettingChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const setTransform = (value) => {
    dispatch(updateDisplaySetting('transform', value));
  };

  const handleZoom = (e) => {
    const pseudoE = {
      deltaY: Number(e.currentTarget.dataset.delta),
      preventDefault: () => {},
      currentTarget: document.getElementById('svg-main'),
    };
    const wheelOptions = {
      id: '#plot_points_wheel',
      setTransform,
      transform,
      vertex: 'center',
    };
    handlers.zoom(pseudoE, wheelOptions);
  };

  return (
    <Image
      equalScaleAxes={equalScaleAxes}
      fontSize={fontSize}
      handlePlotChange={handlePlotChange}
      handleSettingChange={handleSettingChange}
      handleZoom={handleZoom}
      logBase={logBase}
      plotNames={plotNames}
      selectedPlot={selectedPlot}
    />
  );
};

export default ImageContainer;

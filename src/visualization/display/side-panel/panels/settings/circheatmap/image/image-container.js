import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from './image';

import reorderArrayItem from '../../../../../../../utils/reorder-array-item';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../../../state/selector/general';
import { changePlot } from '../../../../../../../state/visualization/settings/display-actions';
import {
  updateCircleOrder,
  updateCircleSetting,
} from '../../../../../../../state/visualization/circheatmap/circle-actions';

const ImageContainer = () => {
  const dispatch = useDispatch();

  const circles = useSelector((state) => selectData(state, 'circles'));
  const plots = useSelector((state) => selectState(state, 'plots'));
  const { selectedPlot } = useSelector((state) => selectData(state, 'display'));

  const plotNames = useMemo(
    () => plots.map((plot) => plot.name),
    [plots],
  );

  const handleDragEnd = (result) => {
    if (
      result.destination.droppableId !== 'image-circle-list'
      || result.destination.index === result.source.index
    ) {
      return;
    }
    const reordered = reorderArrayItem(circles.order, result.source.index, result.destination.index);
    dispatch(updateCircleOrder(reordered));
  };

  const handlePlotChange = (e, name, value) => {
    const index = plotNames.indexOf(value);
    if (index !== selectedPlot) {
      dispatch(changePlot(index));
    }
  };

  const handleSettingChange = (e, id, value) => {
    const [, attribute, index] = id.split('_');
    dispatch(updateCircleSetting({
      attribute,
      index: Number(index),
      value,
    }));
  };

  return (
    <Image
      circles={circles}
      handleDragEnd={handleDragEnd}
      handlePlotChange={handlePlotChange}
      handleSettingChange={handleSettingChange}
      plotNames={plotNames}
      selectedPlot={selectedPlot}
    />
  );
};

export default ImageContainer;

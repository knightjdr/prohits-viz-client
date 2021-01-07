import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiCustomization from './poi-customization';

import {
  addPoints,
  updateCustomizationSetting,
} from '../../../../../../state/visualization/scatter/customization-actions';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectPlotLabels } from '../../../../../../state/selector/visualization/plot-selector';

const PoiCustomizationContainer = () => {
  const dispatch = useDispatch();

  const poi = useSelector((state) => selectDataProperty(state, 'poi', 'points'));
  const { color, radius } = useSelector((state) => selectData(state, 'customization'));
  const { labels } = useSelector((state) => selectPlotLabels(state));

  const handleAddCustomizations = () => {
    if (poi.length > 0) {
      const points = poi.reduce((accum, index) => ({
        ...accum,
        [labels[index]]: { color, radius },
      }), {});
      dispatch(addPoints(points));
    }
  };

  const handleColorChange = (hex) => {
    dispatch(updateCustomizationSetting('color', hex));
  };

  const handleRadiusChange = (e, id, value) => {
    dispatch(updateCustomizationSetting('radius', Number(value)));
  };

  return (
    <PoiCustomization
      color={color}
      handleAddCustomizations={handleAddCustomizations}
      handleColorChange={handleColorChange}
      handleRadiusChange={handleRadiusChange}
      radius={radius}
    />
  );
};

export default PoiCustomizationContainer;

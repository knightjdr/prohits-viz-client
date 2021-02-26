import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiCustomization from './poi-customization';

import {
  addPoints,
  updateCustomizationSetting,
} from '../../../../../../state/visualization/scatter/customization-actions';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';

const PoiCustomizationContainer = () => {
  const dispatch = useDispatch();

  const { color, radius } = useSelector((state) => selectData(state, 'customization'));

  const handleAddCustomizations = () => {
    dispatch(addPoints(color, radius));
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

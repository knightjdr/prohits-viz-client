import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiCustomization from './poi-customization';

import {
  addGroupFromPOI,
  updateCustomizationSetting,
} from '../../../../../../state/visualization/scatter/customization-actions';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';

const PoiCustomizationContainer = () => {
  const dispatch = useDispatch();

  const { color, label, radius } = useSelector((state) => selectData(state, 'customization'));

  const handleAddCustomizations = () => {
    dispatch(addGroupFromPOI());
  };

  const handleColorChange = (hex) => {
    dispatch(updateCustomizationSetting('color', hex));
  };

  const handleRadiusChange = (e, id, value) => {
    dispatch(updateCustomizationSetting('radius', Number(value)));
  };

  const handleLabelChange = (e, id, value) => {
    dispatch(updateCustomizationSetting('label', value));
  };

  return (
    <PoiCustomization
      color={color}
      handleAddCustomizations={handleAddCustomizations}
      handleColorChange={handleColorChange}
      handleLabelChange={handleLabelChange}
      handleRadiusChange={handleRadiusChange}
      label={label}
      radius={radius}
    />
  );
};

export default PoiCustomizationContainer;

import React from 'react';
import { useSelector } from 'react-redux';

import Customization from './customization';

import { selectData } from '../../../../../state/selector/visualization/data-selector';

const CustomizationContainer = () => {
  const customization = useSelector((state) => selectData(state, 'customization'));

  return (
    <Customization
      customization={customization}
    />
  );
};

export default CustomizationContainer;

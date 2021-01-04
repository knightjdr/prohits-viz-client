import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Customization from './customization';

import sort from '../../../../../utils/sort';
import { selectData } from '../../../../../state/selector/visualization/data-selector';

const CustomizationContainer = () => {
  const customization = useSelector((state) => selectData(state, 'customization'));

  const labelOrder = useMemo(
    () => {
      const order = Object.keys(customization);
      order.sort(sort.character);
      return order;
    },
    [customization],
  );

  console.log(labelOrder);

  return (
    <Customization
      customization={customization}
      labelOrder={labelOrder}
    />
  );
};

export default CustomizationContainer;

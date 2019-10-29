import React from 'react';
import { useSelector } from 'react-redux';

import Markers from './markers';

import { selectData } from '../../../../../../../state/selector/visualization/data-selector';

const MarkerContainer = () => {
  const markers = useSelector(state => selectData(state, 'markers'));

  return (
    <Markers
      markers={markers}
    />
  );
};

export default MarkerContainer;

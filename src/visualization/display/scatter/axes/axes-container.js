import React from 'react';
import { useSelector } from 'react-redux';

import Axes from './axes';

import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../state/selector/general';

const AxesContainer = () => {
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const selectedPlot = useSelector((state) => selectDataProperty(state, 'display', 'selectedPlot'));
  const plot = useSelector((state) => selectStateProperty(state, 'plots', selectedPlot));

  return (
    <Axes
      height={dimensions.height}
      labels={plot.labels}
      width={dimensions.width}
    />
  );
};

export default AxesContainer;

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Markup from './markup__scatter';

import { selectData } from '../../../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../../../state/selector/general';

const MarkupContainer = () => {
  const { selectedPlot } = useSelector((state) => selectData(state, 'display'));
  const plot = useSelector((state) => selectStateProperty(state, 'plots', selectedPlot));

  const labels = useMemo(
    () => plot.points.map((point) => point.label),
    [plot],
  );

  return (
    <Markup
      labels={labels}
    />
  );
};

export default MarkupContainer;

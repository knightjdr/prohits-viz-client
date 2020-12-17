import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Plot from './plot';

import formatData from './data/format-data';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../state/selector/general';

const PlotContainer = () => {
  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const { logTransform, selectedPlot, transform } = useSelector((state) => selectData(state, 'display'));
  const plot = useSelector((state) => selectStateProperty(state, 'plots', selectedPlot));

  const data = useMemo(
    () => {
      const options = {
        axisLength,
        log: false,
        scale: transform.scale,
      };
      return formatData(plot.points, options);
    },
    [axisLength, logTransform, plot, transform.scale],
  );

  return (
    <Plot
      points={data.points}
      ticks={data.ticks}
    />
  );
};

export default PlotContainer;

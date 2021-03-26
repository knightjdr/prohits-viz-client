import React, { useMemo } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Plot from './plot';

import {
  changeScatterPlot,
  resetScatterTransformations,
} from '../../../../../../state/visualization/settings/display-actions';
import { defaultState as defaultDisplayState } from '../../../../../defaults/scatter/display';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../../state/selector/general';

const PlotContainer = () => {
  const dispatch = useDispatch();

  const plots = useSelector((state) => selectState(state, 'plots'));
  const { selectedPlot } = useSelector((state) => selectData(state, 'display'));

  const plotNames = useMemo(
    () => plots.map((plot) => plot.name),
    [plots],
  );

  const handlePlotChange = (e, name, value) => {
    const index = plotNames.indexOf(value);
    batch(() => {
      dispatch(changeScatterPlot(index));
      dispatch(resetScatterTransformations({
        transform: defaultDisplayState.transform,
      }));
    });
  };

  return (
    <Plot
      handlePlotChange={handlePlotChange}
      plotNames={plotNames}
      selectedPlot={selectedPlot}
    />
  );
};

export default PlotContainer;

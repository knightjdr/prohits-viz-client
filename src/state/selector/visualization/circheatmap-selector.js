import { createSelector } from 'reselect';

import sortOrder from '../../../utils/sort-order';

const getPlot = (state) => {
  const { display, plots, tabs } = state;
  return plots[display[tabs.activeSnapshot].selectedPlot];
};

export const getPlotLabels = (state) => {
  const {
    readouts,
    tabs: { activeSnapshot },
  } = state;
  if (readouts[activeSnapshot]) {
    const labels = readouts[activeSnapshot].current.map((readout) => readout.label);
    const [order, sorted] = sortOrder(labels, true);
    return { labels, order, sorted };
  }
  return {};
};

export const selectPlot = createSelector(
  [getPlot],
  (state) => (
    state
  ),
);

export const selectCircHeatmapLabels = createSelector(
  [getPlotLabels],
  (state) => (
    state
  ),
);

import { createSelector } from 'reselect';

import sortOrder from '../../../utils/sort-order';

const getPlot = (state) => {
  const { display, plots, tabs } = state;
  return plots[display[tabs.activeSnapshot].selectedPlot];
};

const getPlotLabels = (state) => {
  const {
    display,
    parameters: { imageType },
    plots,
    tabs,
  } = state;
  const plot = plots?.[display[tabs.activeSnapshot].selectedPlot];
  if (plot) {
    const pointKey = imageType === 'circheatmap' ? 'readouts' : 'points';
    const labels = plot[pointKey].map((point) => point.label);
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

export const selectPlotLabels = createSelector(
  [getPlotLabels],
  (state) => (
    state
  ),
);

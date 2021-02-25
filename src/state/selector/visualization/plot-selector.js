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
    points,
    plots,
    tabs: { activeSnapshot },
  } = state;
  if (imageType === 'scatter') {
    const labels = points[activeSnapshot].current.map((point) => point.label);
    const [order, sorted] = sortOrder(labels, true);
    return { labels, order, sorted };
  }
  if (imageType === 'circheatmap') {
    const plot = plots?.[display[activeSnapshot].selectedPlot];
    const labels = plot.readouts.map((point) => point.label);
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

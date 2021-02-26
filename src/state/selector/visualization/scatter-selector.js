import { createSelector } from 'reselect';

import sortOrder from '../../../utils/sort-order';

const getPlot = (state) => {
  const { display, plots, tabs } = state;
  return plots[display[tabs.activeSnapshot].selectedPlot];
};

export const getPlotLabels = (state) => {
  const {
    points,
    tabs: { activeSnapshot },
  } = state;
  if (points[activeSnapshot]) {
    const labels = points[activeSnapshot].current.map((point) => point.label);
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

export const selectScatterLabels = createSelector(
  [getPlotLabels],
  (state) => (
    state
  ),
);

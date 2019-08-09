export const UPDATE_PLOT_POSITION = 'UPDATE_PLOT_POSITION';

export const updatePlotPosition = (fixed, translate) => ({
  fixed,
  translate,
  type: UPDATE_PLOT_POSITION,
});

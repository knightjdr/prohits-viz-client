export const RESET_IMAGE = 'RESET_IMAGE';
export const UPDATE_PLOT_POSITION = 'UPDATE_PLOT_POSITION';

export const resetImage = () => ({
  type: RESET_IMAGE,
});

export const updatePlotPosition = (fixed, translate) => ({
  fixed,
  translate,
  type: UPDATE_PLOT_POSITION,
});

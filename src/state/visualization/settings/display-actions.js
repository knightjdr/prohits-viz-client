export const RESET_IMAGE = 'RESET_IMAGE';
export const UPDATE_PLOT_POSITION = 'UPDATE_PLOT_POSITION';

export const resetImage = dataID => ({
  dataID,
  type: RESET_IMAGE,
});

export const updatePlotPosition = (dataID, fixed, translate) => ({
  dataID,
  fixed,
  translate,
  type: UPDATE_PLOT_POSITION,
});

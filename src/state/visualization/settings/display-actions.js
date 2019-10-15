export const RESET_IMAGE = 'RESET_IMAGE';
export const FIX_PLOT = 'FIX_PLOT';

export const fixPlot = (dataID, fixed) => ({
  dataID,
  fixed,
  type: FIX_PLOT,
});

export const resetImage = dataID => ({
  dataID,
  type: RESET_IMAGE,
});

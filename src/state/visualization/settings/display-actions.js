export const RESET_IMAGE = 'RESET_IMAGE';
export const FIX_PLOT = 'FIX_PLOT';

export const fixPlot = fixed => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  fixed,
  type: FIX_PLOT,
});

export const resetImage = () => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  type: RESET_IMAGE,
});

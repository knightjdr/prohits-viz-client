export const CHANGE_PLOT = 'CHANGE_PLOT';
export const RESET_CIRCHEATMAP = 'RESET_CIRCHEATMAP';
export const RESET_HEATMAP = 'RESET_HEATMAP';
export const RESET_SCATTER = 'RESET_SCATTER';
export const RESET_SCATTER_TRANSFORMATIONS = 'RESET_SCATTER_TRANSFORMATIONS';
export const UPDATE_DISPLAY_SETTING = 'UPDATE_DISPLAY_SETTING';

export const changePlot = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting: 'selectedPlot',
  type: CHANGE_PLOT,
  value,
});

export const resetCircheatmap = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_CIRCHEATMAP,
});

export const resetHeatmap = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_HEATMAP,
});

export const resetScatter = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCATTER,
  value,
});

export const resetScatterTransformations = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCATTER_TRANSFORMATIONS,
  value,
});

export const updateDisplaySetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_DISPLAY_SETTING,
  value,
});

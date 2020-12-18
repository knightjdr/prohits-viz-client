export const RESET_HEATMAP = 'RESET_HEATMAP';
export const RESET_SCATTER = 'RESET_SCATTER';
export const UPDATE_DISPLAY_SETTING = 'UPDATE_DISPLAY_SETTING';

export const resetHeatmap = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_HEATMAP,
});

export const resetScatter = (value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCATTER,
  value,
});

export const updateDisplaySetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_DISPLAY_SETTING,
  value,
});

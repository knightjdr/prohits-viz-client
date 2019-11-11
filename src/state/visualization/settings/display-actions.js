export const RESET_IMAGE = 'RESET_IMAGE';
export const UPDATE_DISPLAY_SETTING = 'UPDATE_DISPLAY_SETTING';

export const resetImage = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_IMAGE,
});

export const updateDisplaySetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_DISPLAY_SETTING,
  value,
});

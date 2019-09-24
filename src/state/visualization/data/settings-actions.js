export const RESET_SETTINGS = 'RESET_SETTINGS';
export const UPDATE_SETTING = 'UPDATE_SETTING';

export const resetSettings = () => ({
  type: RESET_SETTINGS,
});

export const updateSetting = (setting, value) => ({
  setting,
  type: UPDATE_SETTING,
  value,
});

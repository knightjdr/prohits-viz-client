export const RESET_SETTINGS = 'RESET_SETTINGS';
export const UPDATE_SETTING = 'UPDATE_SETTING';

export const resetSettings = dataID => ({
  dataID,
  type: RESET_SETTINGS,
});

export const updateSetting = (dataID, setting, value) => ({
  dataID,
  setting,
  type: UPDATE_SETTING,
  value,
});

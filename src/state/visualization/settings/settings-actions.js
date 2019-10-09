export const UPDATE_SETTING = 'UPDATE_SETTING';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSetting = (dataID, setting, value) => ({
  dataID,
  setting,
  type: UPDATE_SETTING,
  value,
});

export const updateSettings = (dataID, settings) => ({
  dataID,
  settings,
  type: UPDATE_SETTINGS,
});

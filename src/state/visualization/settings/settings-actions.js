export const UPDATE_SETTING = 'UPDATE_SETTING';

export const updateSetting = (dataID, setting, value) => ({
  dataID,
  setting,
  type: UPDATE_SETTING,
  value,
});

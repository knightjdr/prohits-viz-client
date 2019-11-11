export const UPDATE_SETTING = 'UPDATE_SETTING';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_SETTING,
  value,
});

export const updateSettings = settings => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  settings,
  type: UPDATE_SETTINGS,
});

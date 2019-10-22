export const UPDATE_SETTING = 'UPDATE_SETTING';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const updateSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  setting,
  type: UPDATE_SETTING,
  value,
});

export const updateSettings = settings => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  settings,
  type: UPDATE_SETTINGS,
});

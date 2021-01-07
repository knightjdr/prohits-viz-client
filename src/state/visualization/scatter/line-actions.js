export const UPDATE_LINE_SETTING = 'UPDATE_LINE_SETTING';

export const updateLineSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_LINE_SETTING,
  value,
});

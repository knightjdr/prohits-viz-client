export const CHANGE_GPROFILER_SETTING = 'CHANGE_GPROFILER_SETTING';
export const CHANGE_GPROFILER_SETTINGS = 'CHANGE_GPROFILER_SETTINGS';

export const changeGprofilerSetting = (setting, value) => ({
  setting,
  type: CHANGE_GPROFILER_SETTING,
  value,
});

export const changeGprofilerSettings = (settings) => ({
  settings,
  type: CHANGE_GPROFILER_SETTINGS,
});

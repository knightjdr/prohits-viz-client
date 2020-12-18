import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  logTransform: false,
};

export const validateSettings = (userSettings) => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    logTransform,
    ...other
  } = userSettings;

  const settings = {
    ...other,
    logTransform: validateBoolean(logTransform, defaultState.logTransform),
  };

  return settings;
};

export const fillSnapshotSettings = (inputSettings) => {
  const settings = {};
  settings.current = validateSettings(inputSettings.current);
  settings.default = inputSettings.default
    ? validateSettings(inputSettings.default)
    : settings.current;

  return settings;
};

const fillSettings = (fileSettings) => {
  if (!fileSettings || !isObject(fileSettings) || Object.keys(fileSettings).length === 0) {
    return {
      main: {
        current: { ...defaultState },
        default: { ...defaultState },
      },
    };
  }

  return fillSnapshots(fileSettings, fillSnapshotSettings);
};

export default fillSettings;

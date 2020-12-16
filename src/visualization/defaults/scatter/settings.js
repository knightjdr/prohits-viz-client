import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {
};

export const validateSettings = (userSettings) => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    ...other
  } = userSettings;

  const settings = {
    ...other,
  };

  return settings;
};

export const fillSnapshotSettings = (inputSettings) => {
  const settings = {};
  settings.current = validateSettings(inputSettings.current);
  settings.default = inputSettings.default
    ? validateSettings(
      inputSettings.default,
      settings.current.imageType,
    )
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

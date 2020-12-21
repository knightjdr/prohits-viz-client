import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  equalScaleAxes: false,
  fontSize: 12,
  logBase: 'none',
};

const acceptedLogBase = {
  none: true,
  2: true,
  10: true,
};

const validateLogBase = (base, defaultBase) => (
  acceptedLogBase[base] ? base : defaultBase
);

export const validateSettings = (userSettings) => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    equalScaleAxes,
    fontSize,
    logBase,
    ...other
  } = userSettings;

  const settings = {
    ...other,
    equalScaleAxes: validateBoolean(equalScaleAxes, defaultState.equalScaleAxes),
    fontSize: validateNumber(fontSize, defaultState.fontSize),
    logBase: validateLogBase(logBase, defaultState.logBase),
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
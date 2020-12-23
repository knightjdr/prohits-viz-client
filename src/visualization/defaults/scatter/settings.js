import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  equalScaleAxes: false,
  fontSize: 12,
  logBase: 'none',
  xFilter: 0,
  yFilter: 0,
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
    xFilter,
    yFilter,
    ...other
  } = userSettings;

  const settings = {
    ...other,
    equalScaleAxes: validateBoolean(equalScaleAxes, defaultState.equalScaleAxes),
    fontSize: validateNumber(fontSize, defaultState.fontSize),
    logBase: validateLogBase(logBase, defaultState.logBase),
    xFilter: validateNumber(xFilter, defaultState.xFilter),
    yFilter: validateNumber(yFilter, defaultState.yFilter),
  };

  return settings;
};

export const fillSnapshotSettings = (inputSettings) => {
  const settings = {};
  settings.default = validateSettings(inputSettings.default);
  settings.current = inputSettings.current
    ? validateSettings(inputSettings.current)
    : settings.default;

  return settings;
};

const fillSettings = (fileSettings) => {
  let settings = fileSettings;
  if (!settings || !isObject(settings) || Object.keys(settings).length === 0) {
    return {
      main: {
        current: { ...defaultState },
        default: { ...defaultState },
      },
    };
  } if (isObject(settings) && Object.keys(settings).length > 0 && !settings.main) {
    settings = {
      main: {
        default: settings,
      },
    };
  }

  return fillSnapshots(settings, fillSnapshotSettings);
};

export default fillSettings;

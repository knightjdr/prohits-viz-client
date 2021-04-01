import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  equalScaleAxes: false,
  fontSize: 12,
  logBase: 'none',
  logX: false,
  logY: false,
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

export const validateLogAxis = (base, logAxis, defaultLogAxis) => {
  if (base !== 'none' && typeof logAxis !== 'boolean') {
    return true;
  }
  return validateBoolean(logAxis, defaultLogAxis);
};

export const validateSettings = (userSettings) => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    equalScaleAxes,
    fontSize,
    logBase,
    logX,
    logY,
    xFilter,
    yFilter,
    ...other
  } = userSettings;

  const validatedLogBase = validateLogBase(logBase, defaultState.logBase);
  const settings = {
    ...other,
    equalScaleAxes: validateBoolean(equalScaleAxes, defaultState.equalScaleAxes),
    fontSize: validateNumber(fontSize, defaultState.fontSize),
    logBase: validatedLogBase,
    logX: validateLogAxis(validatedLogBase, logX, defaultState.logX),
    logY: validateLogAxis(validatedLogBase, logY, defaultState.logY),
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

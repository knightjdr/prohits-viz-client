import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray, validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  segmentOrder: [],
  showKnown: false,
  showText: false,
};

export const validateSettings = (userSettings) => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    segmentOrder,
    showKnown,
    showText,
    ...other
  } = userSettings;

  const settings = {
    ...other,
    segmentOrder: validateArray(segmentOrder, defaultState.segmentOrder),
    showKnown: validateBoolean(showKnown, defaultState.showKnown),
    showText: validateBoolean(showText, defaultState.showText),
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

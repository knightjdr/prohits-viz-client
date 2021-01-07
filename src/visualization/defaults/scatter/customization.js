import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import validateHex from '../../../utils/validate-hex';
import { validateNumber, validateObject } from '../../../utils/validate-type';

export const defaultState = {
  color: '#333333',
  points: {},
  radius: 4,
};

export const fillSnapshotCustomization = (inputCustomization) => {
  const {
    color,
    points,
    radius,
  } = inputCustomization;

  return {
    color: validateHex(color, defaultState.color),
    points: validateObject(points, defaultState.points),
    radius: validateNumber(radius, defaultState.radius),
  };
};

const fillCustomization = (fileCustomization) => {
  let customization = fileCustomization;
  if (!customization || !isObject(customization) || Object.keys(customization).length === 0) {
    return {
      main: { ...defaultState },
    };
  } if (isObject(customization) && Object.keys(customization).length > 0 && !customization.main) {
    customization = {
      main: { ...customization },
    };
  }

  return fillSnapshots(customization, fillSnapshotCustomization);
};

export default fillCustomization;

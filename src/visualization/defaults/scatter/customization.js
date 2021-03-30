import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import validateHex from '../../../utils/validate-hex';
import { validateArray, validateNumber, validateString } from '../../../utils/validate-type';

export const defaultState = {
  color: '#333333',
  groups: [
    {
      color: '#333333',
      label: 'group 1',
      points: ['MPDZ', 'MPP5'],
      radius: 10,
    },
  ],
  id: 1,
  label: '',
  radius: 4,
};

export const fillSnapshotCustomization = (inputCustomization) => {
  const {
    color,
    groups,
    id,
    label,
    radius,
  } = inputCustomization;

  return {
    color: validateHex(color, defaultState.color),
    groups: validateArray(groups, defaultState.groups),
    id: validateNumber(id, defaultState.id),
    label: validateString(label, defaultState.label),
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

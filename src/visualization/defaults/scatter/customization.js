import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {};

export const fillSnapshotCustomization = (inputCustomization) => (
  isObject(inputCustomization) ? inputCustomization : { ...defaultState }
);

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

import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  showAll: false,
  status: {},
};

export const fillSnapshotLabels = (inputDisplay) => {
  const {
    showAll,
    status,
  } = inputDisplay;

  return {
    showAll: validateBoolean(showAll, defaultState.showAll),
    status: isObject(status) ? status : defaultState.status,
  };
};

const fillLabels = (fileLabels) => {
  if (!fileLabels || !isObject(fileLabels) || Object.keys(fileLabels).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileLabels, fillSnapshotLabels);
};

export default fillLabels;

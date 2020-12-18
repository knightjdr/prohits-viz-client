import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {};

export const fillSnapshotLabels = (inputLabels) => (
  isObject(inputLabels) ? inputLabels : defaultState
);

const fillLabels = (fileLabels) => {
  if (!fileLabels || !isObject(fileLabels) || Object.keys(fileLabels).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileLabels, fillSnapshotLabels);
};

export default fillLabels;

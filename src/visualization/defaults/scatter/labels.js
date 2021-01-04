import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  showAll: false,
  status: {},
};

export const fillSnapshotLabels = (inputLabels) => {
  const {
    showAll,
    status,
  } = inputLabels;

  return {
    showAll: validateBoolean(showAll, defaultState.showAll),
    status: isObject(status) ? status : defaultState.status,
  };
};

const fillLabels = (fileLabels) => {
  let labels = fileLabels;
  if (!labels || !isObject(labels) || Object.keys(labels).length === 0) {
    return {
      main: { ...defaultState },
    };
  } if (isObject(labels) && Object.keys(labels).length > 0 && !labels.main) {
    labels = {
      main: {
        status: { ...labels },
      },
    };
  }

  return fillSnapshots(labels, fillSnapshotLabels);
};

export default fillLabels;

import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateObject, validateString } from '../../../utils/validate-type';

export const defaultState = {
  labels: {},
  match: false,
  term: '',
};

export const fillSnapshotSearchStatus = (inputSearchStatus) => {
  const {
    labels,
    match,
    term,
  } = inputSearchStatus;

  return {
    labels: validateObject(labels, defaultState.labels),
    match: validateBoolean(match, defaultState.match),
    term: validateString(term, defaultState.term),
  };
};

const fillSelectionTerm = (fileSearchStatus) => {
  if (!fileSearchStatus || !isObject(fileSearchStatus) || Object.keys(fileSearchStatus).length === 0) {
    return {
      main: {
        ...defaultState,
        labels: {},
      },
    };
  }

  return fillSnapshots(fileSearchStatus, fillSnapshotSearchStatus);
};

export default fillSelectionTerm;

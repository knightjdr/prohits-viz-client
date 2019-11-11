import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateObject, validateString } from '../../../utils/validate-type';

export const defaultState = {
  columns: {},
  match: false,
  rows: {},
  term: '',
};

export const fillSnapshotSearchStatus = (inputSearchStatus) => {
  const {
    columns,
    match,
    rows,
    term,
  } = inputSearchStatus;

  return {
    columns: validateObject(columns, defaultState.columns),
    match: validateBoolean(match, defaultState.match),
    rows: validateObject(rows, defaultState.rows),
    term: validateString(term, defaultState.term),
  };
};

const fillSelectionTerm = (fileSearchStatus) => {
  if (!fileSearchStatus || !isObject(fileSearchStatus) || Object.keys(fileSearchStatus).length === 0) {
    return {
      main: {
        ...defaultState,
        columns: {},
        rows: {},
      },
    };
  }

  return fillSnapshots(fileSearchStatus, fillSnapshotSearchStatus);
};

export default fillSelectionTerm;

import isObject from '../../../utils/is-object';
import { validateBoolean, validateObject, validateString } from '../../../utils/validate-type';

export const defaultState = {
  columns: {},
  match: false,
  rows: {},
  term: '',
};

const fillSelectionSearchStatus = fileSearchStatus => (
  Object.keys(fileSearchStatus).reduce((accum, selection) => {
    const {
      columns,
      match,
      rows,
      term,
    } = fileSearchStatus[selection];

    const stateSearchStatus = {
      columns: validateObject(columns, defaultState.columns),
      match: validateBoolean(match, defaultState.match),
      rows: validateObject(rows, defaultState.rows),
      term: validateString(term, defaultState.term),
    };

    return {
      ...accum,
      [selection]: stateSearchStatus,
    };
  }, {})
);

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

  return fillSelectionSearchStatus(fileSearchStatus);
};

export default fillSelectionTerm;

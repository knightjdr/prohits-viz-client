import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const defaultState = {
  columns: [],
  rows: [],
};

export const fillSnapshotPOI = (inputPOI) => {
  const {
    columns,
    rows,
  } = inputPOI;

  return {
    columns: validateArray(columns, defaultState.columns),
    rows: validateArray(rows, defaultState.rows),
  };
};

const fillPOI = (filePOI) => {
  if (!filePOI || !isObject(filePOI) || Object.keys(filePOI).length === 0) {
    return {
      main: {
        columns: [],
        rows: [],
      },
    };
  }

  return fillSnapshots(filePOI, fillSnapshotPOI);
};

export default fillPOI;

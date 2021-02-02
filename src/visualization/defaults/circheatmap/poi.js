import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const defaultState = {
  readouts: [],
};

export const fillSnapshotPOI = (inputPOI) => {
  const {
    readouts,
  } = inputPOI;

  return {
    readouts: validateArray(readouts, defaultState.readouts),
  };
};

const fillPOI = (filePOI) => {
  if (!filePOI || !isObject(filePOI) || Object.keys(filePOI).length === 0) {
    return {
      main: {
        readouts: [],
      },
    };
  }

  return fillSnapshots(filePOI, fillSnapshotPOI);
};

export default fillPOI;

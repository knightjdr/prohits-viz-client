import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const defaultState = {
  points: [],
};

export const fillSnapshotPOI = (inputPOI) => {
  const {
    points,
  } = inputPOI;

  return {
    points: validateArray(points, defaultState.points),
  };
};

const fillPOI = (filePOI) => {
  if (!filePOI || !isObject(filePOI) || Object.keys(filePOI).length === 0) {
    return {
      main: {
        points: [],
      },
    };
  }

  return fillSnapshots(filePOI, fillSnapshotPOI);
};

export default fillPOI;

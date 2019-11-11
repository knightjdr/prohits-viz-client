import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import validateHex from '../../../utils/validate-hex';
import { validateBoolean, validateObject } from '../../../utils/validate-type';

export const defaultState = {
  color: '#000000',
  list: {},
  record: false,
  show: true,
};

export const fillSnapshotMarkers = (inputMarkers) => {
  const {
    color,
    list,
    record,
    show,
  } = inputMarkers;

  return {
    color: validateHex(color, defaultState.color),
    list: validateObject(list, defaultState.list),
    record: validateBoolean(record, defaultState.record),
    show: validateBoolean(show, defaultState.show),
  };
};

const fillMarkers = (fileMarkers) => {
  if (!fileMarkers || !isObject(fileMarkers) || Object.keys(fileMarkers).length === 0) {
    return {
      main: {
        ...defaultState,
        list: {},
      },
    };
  }

  return fillSnapshots(fileMarkers, fillSnapshotMarkers);
};

export default fillMarkers;

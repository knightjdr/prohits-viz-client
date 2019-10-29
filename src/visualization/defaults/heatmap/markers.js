import isObject from '../../../utils/is-object';
import validateHex from '../../../utils/validate-hex';
import { validateBoolean, validateObject } from '../../../utils/validate-type';

export const defaultState = {
  color: '#000000',
  list: {},
  record: false,
  show: true,
};

const fillSelectionMarkers = fileMarkers => (
  Object.entries(fileMarkers).reduce((accum, [id, selection]) => {
    const {
      color,
      list,
      record,
      show,
    } = selection;

    const stateAnnotations = {
      color: validateHex(color, defaultState.color),
      list: validateObject(list, defaultState.list),
      record: validateBoolean(record, defaultState.record),
      show: validateBoolean(show, defaultState.show),
    };

    return {
      ...accum,
      [id]: stateAnnotations,
    };
  }, {})
);

const fillMarkers = (fileMarkers) => {
  if (!fileMarkers || !isObject(fileMarkers) || Object.keys(fileMarkers).length === 0) {
    return {
      main: {
        ...defaultState,
        list: {},
      },
    };
  }

  return fillSelectionMarkers(fileMarkers);
};

export default fillMarkers;

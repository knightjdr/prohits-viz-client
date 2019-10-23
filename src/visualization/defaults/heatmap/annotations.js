import isObject from '../../../utils/is-object';
import validateHex from '../../../utils/validate-hex';
import { validateBoolean, validateNumber, validateObject } from '../../../utils/validate-type';

export const defaultState = {
  color: '#f44336',
  fontSize: 16,
  list: {},
  show: true,
};

const fillSelectionAnnotations = fileAnnotations => (
  Object.keys(fileAnnotations).reduce((accum, selection) => {
    const {
      color,
      fontSize,
      list,
      show,
    } = fileAnnotations[selection];

    const stateAnnotations = {
      color: validateHex(color, defaultState.color),
      fontSize: validateNumber(fontSize, defaultState.fontSize),
      list: validateObject(list, defaultState.list),
      show: validateBoolean(show, defaultState.show),
    };

    return {
      ...accum,
      [selection]: stateAnnotations,
    };
  }, {})
);

const fillAnnotations = (fileAnnotations) => {
  if (!fileAnnotations || !isObject(fileAnnotations) || Object.keys(fileAnnotations).length === 0) {
    return {
      main: {
        ...defaultState,
        list: {},
      },
    };
  }

  return fillSelectionAnnotations(fileAnnotations);
};

export default fillAnnotations;

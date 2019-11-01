import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const defaultState = {
  columns: [],
  rows: [],
};

const fillSelectionPOI = filePOI => (
  Object.entries(filePOI).reduce((accum, [id, selection]) => {
    const {
      columns,
      rows,
    } = selection;

    const stateAnnotations = {
      columns: validateArray(columns, defaultState.columns),
      rows: validateArray(rows, defaultState.rows),
    };

    return {
      ...accum,
      [id]: stateAnnotations,
    };
  }, {})
);

const fillPOI = (filePOI) => {
  if (!filePOI || !isObject(filePOI) || Object.keys(filePOI).length === 0) {
    return {
      main: {
        columns: [],
        rows: [],
      },
    };
  }

  return fillSelectionPOI(filePOI);
};

export default fillPOI;

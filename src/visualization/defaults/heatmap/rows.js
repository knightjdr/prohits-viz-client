import isObject from '../../../utils/is-object';
import { validateArray, validateString } from '../../../utils/validate-type';

export const defaultState = {
  defaultOrder: [],
  deleted: [],
  direction: null,
  order: [],
  sortBy: null,
};

const validDirections = ['asc', 'desc'];

const fillSelectionRows = (fileRows, defaultRowOrder) => (
  Object.entries(fileRows).reduce((accum, [id, selection]) => {
    const {
      defaultOrder,
      deleted,
      direction,
      order,
      sortBy,
    } = selection;

    const rowsState = {
      defaultOrder: validateArray(defaultOrder, defaultRowOrder),
      deleted: validateArray(deleted, defaultState.deleted),
      direction: validDirections.includes(direction) ? direction : defaultState.direction,
      order: validateArray(order, defaultRowOrder),
      sortBy: validateString(sortBy, defaultState.sortBy),
    };

    return {
      ...accum,
      [id]: rowsState,
    };
  }, {})
);

const fillRows = (fileRows, fileRowDB) => {
  const defaultRowOrder = fileRowDB ? [...Array(fileRowDB.length).keys()] : [];

  if (!fileRows || !isObject(fileRows) || Object.keys(fileRows).length === 0) {
    return {
      main: {
        deleted: defaultState.deleted,
        defaultOrder: defaultRowOrder,
        direction: defaultState.direction,
        order: defaultRowOrder,
        sortBy: defaultState.sortBy,
      },
    };
  }

  return fillSelectionRows(fileRows, defaultRowOrder);
};

export default fillRows;

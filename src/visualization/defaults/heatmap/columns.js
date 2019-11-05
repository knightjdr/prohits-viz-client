import isObject from '../../../utils/is-object';
import { validateArray, validateString } from '../../../utils/validate-type';

const defaultState = {
  defaultOrder: [],
  deleted: [],
  order: [],
  ref: null,
};

const fillSelectionColumns = (fileColumns, defaultColumnOrder) => (
  Object.entries(fileColumns).reduce((accum, [id, selection]) => {
    const {
      defaultOrder,
      deleted,
      order,
      ref,
    } = selection;

    const rowsState = {
      defaultOrder: validateArray(defaultOrder, defaultColumnOrder),
      deleted: validateArray(deleted, defaultState.deleted),
      order: validateArray(order, defaultColumnOrder),
      ref: validateString(ref, defaultState.ref),
    };

    return {
      ...accum,
      [id]: rowsState,
    };
  }, {})
);

const fillColumns = (fileColumns, fileColumnDB) => {
  const defaultColumnOrder = fileColumnDB ? [...Array(fileColumnDB.length).keys()] : [];

  if (!fileColumns || !isObject(fileColumns) || Object.keys(fileColumns).length === 0) {
    return {
      main: {
        defaultOrder: defaultColumnOrder,
        deleted: defaultState.deleted,
        order: defaultColumnOrder,
        ref: defaultState.ref,
      },
    };
  }

  return fillSelectionColumns(fileColumns, defaultColumnOrder);
};

export default fillColumns;

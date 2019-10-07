import arrayContains from '../../../utils/array-contains';
import isObject from '../../../utils/is-object';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  order: [],
  sortBy: null,
};

const validDirections = ['asc', 'desc'];

const fillRows = (userRows, userRowDB) => {
  const defaultRowOrder = userRowDB ? [...Array(userRowDB.length).keys()] : [];

  if (!userRows || !isObject(userRows) || Object.keys(userRows).length === 0) {
    return {
      main: {
        defaultOrder: defaultRowOrder,
        direction: defaultState.direction,
        order: defaultRowOrder,
        sortBy: defaultState.sortBy,
      },
    };
  }

  return Object.keys(userRows).reduce((accum, selection) => {
    const {
      defaultOrder,
      direction,
      order,
      sortBy,
    } = userRows[selection];
    const rows = {};

    rows.direction = validDirections.includes(direction) ? direction : null;

    // Ensure sortBy value is within range of list.
    rows.sortBy = Number.isInteger(sortBy) && sortBy < defaultRowOrder.length ? sortBy : null;

    // Ensure default row order and applied row order are defined.
    rows.defaultOrder = Array.isArray(defaultOrder) && arrayContains(defaultRowOrder, defaultOrder)
      ? defaultOrder : defaultRowOrder;
    rows.order = Array.isArray(order) && order.length > 0 && arrayContains(defaultRowOrder, order)
      ? order : defaultRowOrder;

    return {
      ...accum,
      [selection]: rows,
    };
  }, {});
};

export default fillRows;

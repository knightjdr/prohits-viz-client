import isObject from '../../../utils/is-object';
import isSubset from '../../../utils/is-subset';

export const defaultState = {
  defaultOrder: [],
  deleted: [],
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
        deleted: defaultState.deleted,
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
      deleted,
      direction,
      order,
      sortBy,
    } = userRows[selection];
    const rows = {};

    rows.direction = validDirections.includes(direction) ? direction : null;
    rows.sortBy = typeof sortBy === 'string' ? sortBy : defaultState.sortBy;

    rows.defaultOrder = Array.isArray(defaultOrder) && isSubset(defaultRowOrder, defaultOrder)
      ? defaultOrder : defaultRowOrder;
    rows.deleted = Array.isArray(deleted) && deleted.length > 0 && isSubset(defaultRowOrder, deleted)
      ? deleted : defaultState.deleted;
    rows.order = Array.isArray(order) && order.length > 0 && isSubset(defaultRowOrder, order)
      ? order : defaultRowOrder;

    return {
      ...accum,
      [selection]: rows,
    };
  }, {});
};

export default fillRows;

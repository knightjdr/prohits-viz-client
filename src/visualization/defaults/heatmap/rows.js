import isObject from '../../../utils/is-object';
import isSubset from '../../../utils/is-subset';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  filterOrder: [],
  order: [],
  sortBy: '',
  sortOrder: [],
};

const validDirections = ['asc', 'desc'];

const fillRows = (userRows, userRowDB) => {
  const defaultRowOrder = userRowDB ? [...Array(userRowDB.length).keys()] : [];

  if (!userRows || !isObject(userRows) || Object.keys(userRows).length === 0) {
    return {
      main: {
        defaultOrder: defaultRowOrder,
        direction: defaultState.direction,
        filterOrder: defaultState.filterOrder,
        order: defaultRowOrder,
        sortBy: defaultState.sortBy,
        sortOrder: defaultState.sortOrder,
      },
    };
  }

  return Object.keys(userRows).reduce((accum, selection) => {
    const {
      defaultOrder,
      direction,
      filterOrder,
      order,
      sortBy,
      sortOrder,
    } = userRows[selection];
    const rows = {};

    rows.direction = validDirections.includes(direction) ? direction : null;
    rows.sortBy = typeof sortBy === 'string' ? sortBy : defaultState.sortBy;

    rows.defaultOrder = Array.isArray(defaultOrder) && isSubset(defaultRowOrder, defaultOrder)
      ? defaultOrder : defaultRowOrder;
    rows.filterOrder = Array.isArray(filterOrder)
      && filterOrder.length > 0
      && isSubset(defaultRowOrder, filterOrder)
      ? filterOrder : defaultState.filterOrder;
    rows.order = Array.isArray(order) && order.length > 0 && isSubset(defaultRowOrder, order)
      ? order : defaultRowOrder;
    rows.sortOrder = Array.isArray(sortOrder) && sortOrder.length > 0 && isSubset(defaultRowOrder, sortOrder)
      ? sortOrder : defaultState.sortOrder;

    return {
      ...accum,
      [selection]: rows,
    };
  }, {});
};

export default fillRows;

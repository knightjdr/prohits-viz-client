import arrayContains from '../../../utils/array-contains';
import isObject from '../../../utils/is-object';

const defaultState = {
  defaultOrder: [],
  filterOrder: [],
  order: [],
  ref: null,
  sortOrder: [],
};

const fillColumns = (userColumns, userColumnDB) => {
  const defaultColumnOrder = userColumnDB ? [...Array(userColumnDB.length).keys()] : [];

  if (!userColumns || !isObject(userColumns) || Object.keys(userColumns).length === 0) {
    return {
      main: {
        defaultOrder: defaultColumnOrder,
        filterOrder: [],
        order: defaultColumnOrder,
        ref: null,
        sortOrder: [],
      },
    };
  }

  return Object.keys(userColumns).reduce((accum, selection) => {
    const {
      defaultOrder,
      filterOrder,
      order,
      ref,
      sortOrder,
    } = userColumns[selection];
    const columns = {};

    // Ensure ref is within userColumnDB.
    columns.ref = typeof ref === 'string' && userColumnDB.includes(ref) ? ref : defaultState.ref;

    columns.defaultOrder = Array.isArray(defaultOrder) && arrayContains(defaultColumnOrder, defaultOrder)
      ? defaultOrder : defaultColumnOrder;
    columns.filterOrder = Array.isArray(filterOrder)
      && filterOrder.length > 0
      && arrayContains(defaultColumnOrder, filterOrder)
      ? filterOrder : defaultState.filterOrder;
    columns.order = Array.isArray(order) && order.length > 0 && arrayContains(defaultColumnOrder, order)
      ? order : defaultColumnOrder;
    columns.sortOrder = Array.isArray(sortOrder) && sortOrder.length > 0 && arrayContains(defaultColumnOrder, sortOrder)
      ? sortOrder : defaultState.sortOrder;

    return {
      ...accum,
      [selection]: columns,
    };
  }, {});
};

export default fillColumns;

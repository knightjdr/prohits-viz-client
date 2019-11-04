import isSubset from '../../../utils/is-subset';
import isObject from '../../../utils/is-object';

const defaultState = {
  defaultOrder: [],
  deleted: [],
  order: [],
  ref: null,
};

const fillColumns = (userColumns, userColumnDB) => {
  const defaultColumnOrder = userColumnDB ? [...Array(userColumnDB.length).keys()] : [];

  if (!userColumns || !isObject(userColumns) || Object.keys(userColumns).length === 0) {
    return {
      main: {
        deleted: [],
        defaultOrder: defaultColumnOrder,
        order: defaultColumnOrder,
        ref: null,
      },
    };
  }

  return Object.keys(userColumns).reduce((accum, selection) => {
    const {
      deleted,
      defaultOrder,
      order,
      ref,
    } = userColumns[selection];
    const columns = {};

    // Ensure ref is within userColumnDB.
    columns.ref = typeof ref === 'string' && userColumnDB.includes(ref) ? ref : defaultState.ref;

    columns.deleted = Array.isArray(deleted) && isSubset(defaultColumnOrder, deleted)
      ? deleted : defaultColumnOrder;
    columns.defaultOrder = Array.isArray(defaultOrder) && isSubset(defaultColumnOrder, defaultOrder)
      ? defaultOrder : defaultColumnOrder;
    columns.order = Array.isArray(order) && order.length > 0 && isSubset(defaultColumnOrder, order)
      ? order : defaultColumnOrder;

    return {
      ...accum,
      [selection]: columns,
    };
  }, {});
};

export default fillColumns;

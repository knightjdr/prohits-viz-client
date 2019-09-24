import arrayContains from '../../../utils/array-contains';
import { arrayShallowEqual } from '../../../utils/array-shallow-equal';

const defaultState = {
  defaultOrder: [],
  names: [],
  order: [],
  ref: null,
};

const fillColumns = (userColumns) => {
  if (!userColumns) {
    return {
      defaultOrder: [],
      names: [],
      order: [],
      ref: null,
    };
  }

  const {
    defaultOrder,
    names,
    order,
    ref,
  } = userColumns;
  const columns = {};

  columns.names = Array.isArray(names) ? names : [];
  // Ensure ref is within names.
  columns.ref = typeof ref === 'string' && columns.names.includes(ref) ? ref : defaultState.ref;

  // Ensure default column order and applied column order are defined.
  const listOrder = [...Array(columns.names.length).keys()];
  columns.defaultOrder = Array.isArray(defaultOrder) && arrayShallowEqual(listOrder, defaultOrder)
    ? defaultOrder : listOrder;
  columns.order = Array.isArray(order) && order.length > 0 && arrayContains(listOrder, order)
    ? order : listOrder;

  return columns;
};

export default fillColumns;

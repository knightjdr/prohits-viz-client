import arrayContains from '../../../utils/array-contains';
import { arrayShallowEqual } from '../../../utils/array-shallow-equal';

export const defaultState = {
  defaultOrder: [],
  direction: null,
  list: [],
  order: [],
  sortBy: null,
};

const validDirections = ['asc', 'desc'];

const fillRows = (userRows) => {
  if (!userRows) {
    return defaultState;
  }

  const {
    defaultOrder,
    direction,
    list,
    order,
    sortBy,
  } = userRows;
  const rows = {};

  rows.list = Array.isArray(list) ? list : [];
  rows.direction = validDirections.includes(direction) ? direction : null;

  // Ensure sortBy value is within range of list.
  rows.sortBy = Number.isInteger(sortBy) && sortBy < rows.list.length ? sortBy : null;

  // Ensure default row order and applied row order are defined.
  const listOrder = [...Array(rows.list.length).keys()];
  rows.defaultOrder = Array.isArray(defaultOrder) && arrayShallowEqual(listOrder, defaultOrder)
    ? defaultOrder : listOrder;
  rows.order = Array.isArray(order) && order.length > 0 && arrayContains(listOrder, order)
    ? order : listOrder;

  return rows;
};

export default fillRows;

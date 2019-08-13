import { arrayShallowEqual } from '../../../utils/array-shallow-equal';

export const defaultState = {
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

  // Ensure row list contains order arr.
  const listOrder = rows.list.map(item => item.name);
  rows.order = Array.isArray(order) && arrayShallowEqual(listOrder, order)
    ? order : listOrder;

  return rows;
};

export default fillRows;

export const DELETE_ROW = 'DELETE_ROW';
export const SET_ROW_ORDER = 'SET_ROW_ORDER';
export const SORT_ROWS = 'SORT_ROWS';

export const deleteRow = (index, order) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  index,
  order,
  type: DELETE_ROW,
});

export const setRowOrder = (order) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  order,
  type: SET_ROW_ORDER,
});

export const sortRows = (direction, order, sortBy) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  direction,
  order,
  sortBy,
  type: SORT_ROWS,
});

export const DELETE_ROW = 'DELETE_ROW';
export const SET_ROW_FILTER_ORDER = 'SET_ROW_FILTER_ORDER';
export const SORT_ROWS = 'SORT_ROWS';

export const deleteRow = (index, order) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  index,
  order,
  type: DELETE_ROW,
});

export const setRowFilterOrder = order => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  order,
  type: SET_ROW_FILTER_ORDER,
});

export const sortRows = (direction, order, sortBy) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  direction,
  order,
  sortBy,
  type: SORT_ROWS,
});

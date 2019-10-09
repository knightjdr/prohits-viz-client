export const FILTER_ROWS = 'FILTER_ROWS';
export const SORT_ROWS = 'SORT_ROWS';

export const filterRows = (dataID, rowOrder, columnOrder) => ({
  columnOrder,
  dataID,
  rowOrder,
  type: FILTER_ROWS,
});

export const sortRows = (dataID, direction, order, sortBy) => ({
  dataID,
  direction,
  order,
  sortBy,
  type: SORT_ROWS,
});

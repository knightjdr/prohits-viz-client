export const FILTER_ROWS = 'FILTER_ROWS';
export const SORT_ROWS = 'SORT_ROWS';

export const filterRows = (rowOrder, columnOrder) => ({
  columnOrder,
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  rowOrder,
  type: FILTER_ROWS,
});

export const sortRows = (direction, order, sortBy) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  direction,
  order,
  sortBy,
  type: SORT_ROWS,
});

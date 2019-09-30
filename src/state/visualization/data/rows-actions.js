export const FILTER_ROWS = 'FILTER_ROWS';
export const SORT_ROWS = 'SORT_ROWS';

export const filterRows = order => ({
  order,
  type: FILTER_ROWS,
});

export const sortRows = (direction, order, sortBy) => ({
  direction,
  order,
  sortBy,
  type: SORT_ROWS,
});

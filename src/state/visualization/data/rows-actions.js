export const UPDATE_ROWS = 'UPDATE_ROWS';

export const updateRows = (direction, order, sortBy) => ({
  direction,
  order,
  sortBy,
  type: UPDATE_ROWS,
});

export const RESTORE_ROWS = 'RESTORE_ROWS';
export const UPDATE_ROWS = 'UPDATE_ROWS';

export const restoreRows = (direction, list, sortBy, rows) => ({
  direction,
  list,
  rows,
  sortBy,
  type: RESTORE_ROWS,
});

export const updateRows = (direction, list, sortBy, rows) => ({
  direction,
  list,
  rows,
  sortBy,
  type: UPDATE_ROWS,
});

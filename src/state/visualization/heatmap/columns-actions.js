export const DELETE_COLUMN = 'DELETE_COLUMN';
export const SET_COLUMN_ORDER = 'SET_COLUMN_ORDER';
export const SET_COLUMN_REFERENCE = 'SET_COLUMN_REFERENCE';

export const deleteColumn = (index, order) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  index,
  order,
  type: DELETE_COLUMN,
});

export const setColumnOrder = (order) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  order,
  type: SET_COLUMN_ORDER,
});

export const setReference = (ref) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  ref,
  type: SET_COLUMN_REFERENCE,
});

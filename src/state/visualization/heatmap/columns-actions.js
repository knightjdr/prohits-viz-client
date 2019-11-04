export const DELETE_COLUMN = 'DELETE_COLUMN';
export const SET_COLUMN_FILTER_ORDER = 'SET_COLUMN_FILTER_ORDER';
export const SET_COLUMN_REFERENCE = 'SET_COLUMN_REFERENCE';

export const deleteColumn = (index, order) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  index,
  order,
  type: SET_COLUMN_FILTER_ORDER,
});

export const setColumnFilterOrder = order => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  order,
  type: SET_COLUMN_FILTER_ORDER,
});

export const setReference = ref => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  ref,
  type: SET_COLUMN_REFERENCE,
});

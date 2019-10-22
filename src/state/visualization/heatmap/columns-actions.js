export const SET_COLUMN_REFERENCE = 'SET_COLUMN_REFERENCE';

export const setReference = ref => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  ref,
  type: SET_COLUMN_REFERENCE,
});

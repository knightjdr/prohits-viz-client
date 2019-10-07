export const SET_COLUMN_REFERENCE = 'SET_COLUMN_REFERENCE';

export const setReference = (dataID, ref) => ({
  dataID,
  ref,
  type: SET_COLUMN_REFERENCE,
});

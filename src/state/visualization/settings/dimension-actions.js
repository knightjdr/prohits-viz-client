export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const UPDATE_DIMENSION = 'UPDATE_DIMENSION';

export const setDimensions = (dimensions) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  dimensions,
  type: SET_DIMENSIONS,
});

export const updateDimension = (dimension, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  dimension,
  type: UPDATE_DIMENSION,
  value,
});

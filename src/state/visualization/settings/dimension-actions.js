export const SET_DIMENSIONS = 'SET_DIMENSIONS';

export const setDimensions = dimensions => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  dimensions,
  type: SET_DIMENSIONS,
});

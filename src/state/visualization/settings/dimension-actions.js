export const RESET_SCROLL = 'RESET_SCROLL';
export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const UPDATE_DIMENSION = 'UPDATE_DIMENSION';
export const UPDATE_DIMENSIONS = 'UPDATE_DIMENSIONS';

export const resetScroll = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: RESET_SCROLL,
});

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

export const updateDimensions = (dimensions) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  dimensions,
  type: UPDATE_DIMENSIONS,
});

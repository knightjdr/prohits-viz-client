export const SET_DIMENSIONS = 'SET_DIMENSIONS';

export const setDimensions = (dataID, dimensions) => ({
  dataID,
  dimensions,
  type: SET_DIMENSIONS,
});

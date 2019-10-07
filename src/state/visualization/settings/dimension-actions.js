export const SET_DIMENSIONS = 'SET_DIMENSIONS';

export const setDimensions = (dataID, rows, columns, pageX, pageY, height, width) => ({
  columns,
  dataID,
  height,
  pageX,
  pageY,
  rows,
  type: SET_DIMENSIONS,
  width,
});

export const SET_DIMENSIONS = 'SET_DIMENSIONS';

export const setDimensions = (rows, columns, pageX, pageY, height, width) => ({
  columns,
  height,
  pageX,
  pageY,
  rows,
  type: SET_DIMENSIONS,
  width,
});

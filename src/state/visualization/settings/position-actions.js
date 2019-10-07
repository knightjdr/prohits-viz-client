export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updatePosition = (dataID, x, y) => ({
  dataID,
  type: UPDATE_POSITION,
  x,
  y,
});

export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updatePosition = (x, y) => ({
  type: UPDATE_POSITION,
  x,
  y,
});

export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updatePosition = (x, y) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: UPDATE_POSITION,
  x,
  y,
});

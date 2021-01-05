export const DELETE_ALL_POINTS = 'DELETE_ALL_POINTS';
export const DELETE_POINT = 'DELETE_POINT';
export const UPDATE_POINT = 'UPDATE_POINT';

export const deleteAllPoints = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: DELETE_ALL_POINTS,
});

export const deletePoint = (label) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  label,
  type: DELETE_POINT,
});

export const updatePoint = (label, parameters) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  label,
  parameters,
  type: UPDATE_POINT,
});

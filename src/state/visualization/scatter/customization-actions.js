export const ADD_POINTS = 'ADD_POINTS';
export const DELETE_ALL_POINTS = 'DELETE_ALL_POINTS';
export const DELETE_POINT = 'DELETE_POINT';
export const UPDATE_POINT = 'UPDATE_POINT';
export const UPDATE_CUSTOMIZATION_SETTING = 'UPDATE_CUSTOMIZATION_SETTING';

export const addPoints = (points) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  points,
  type: ADD_POINTS,
});

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

export const updateCustomizationSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  setting,
  type: UPDATE_CUSTOMIZATION_SETTING,
  value,
});

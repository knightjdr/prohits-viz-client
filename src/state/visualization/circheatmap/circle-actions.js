export const UPDATE_CIRCLE_ORDER = 'UPDATE_CIRCLE_ORDER';
export const UPDATE_CIRCLE_SETTING = 'UPDATE_CIRCLE_SETTING';
export const UPDATE_CIRCLE_VISIBILITY = 'UPDATE_CIRCLE_VISIBILITY';

export const updateCircleOrder = ({ key, order }) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  key,
  order,
  type: UPDATE_CIRCLE_ORDER,
});

export const updateCircleSetting = ({ attribute, index, value }) => ({
  attribute,
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  index,
  type: UPDATE_CIRCLE_SETTING,
  value,
});

export const updateCircleVisibility = ({ hidden, order }) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  hidden,
  order,
  type: UPDATE_CIRCLE_VISIBILITY,
});

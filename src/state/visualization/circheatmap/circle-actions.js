export const UPDATE_CIRCLE_ORDER = 'UPDATE_CIRCLE_ORDER';
export const UPDATE_CIRCLE_SETTING = 'UPDATE_CIRCLE_SETTING';

export const updateCircleOrder = (newOrder) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  order: newOrder,
  type: UPDATE_CIRCLE_ORDER,
});

export const updateCircleSetting = ({ attribute, index, value }) => ({
  attribute,
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  index,
  type: UPDATE_CIRCLE_SETTING,
  value,
});

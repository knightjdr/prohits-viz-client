export const FILTER_POINTS = 'FILTER_POINTS';

export const filterPoints = (values) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: FILTER_POINTS,
  ...values,
});

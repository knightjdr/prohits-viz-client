export const CHANGE_ACTIVE_SNAPSHOT = 'CHANGE_ACTIVE_SNAPSHOT';

export const changeActiveSnapshot = name => ({
  name,
  type: CHANGE_ACTIVE_SNAPSHOT,
});

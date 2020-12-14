export const UPDATE_POI = 'UPDATE_POI';

export const updatePOI = (poi) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  poi,
  type: UPDATE_POI,
});

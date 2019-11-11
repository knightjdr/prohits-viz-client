export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS';

export const clearSearchStatus = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: CLEAR_SEARCH,
});

export const setSearchStatus = (term, results) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  results,
  term,
  type: SET_SEARCH_STATUS,
  x: results.position.x,
  y: results.position.y,
});

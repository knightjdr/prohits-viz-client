export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SEARCH_STATUS_HEATMAP = 'SET_SEARCH_STATUS_HEATMAP';
export const SET_SEARCH_STATUS_SCATTER = 'SET_SEARCH_STATUS_SCATTER';

export const clearSearchStatus = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: CLEAR_SEARCH,
});

export const setSearchStatusHeatmap = (term, results) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  dimensions: results.dimensions,
  results,
  term,
  type: SET_SEARCH_STATUS_HEATMAP,
  x: results.position.x,
  y: results.position.y,
});

export const setSearchStatusScatter = (term, results) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  results,
  term,
  type: SET_SEARCH_STATUS_SCATTER,
});

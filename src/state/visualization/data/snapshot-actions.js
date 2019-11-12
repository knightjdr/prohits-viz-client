export const ADD_HEATMAP_SNAPSHOT = 'ADD_HEATMAP_SNAPSHOT';
export const REMOVE_HEATMAP_SNAPSHOT = 'REMOVE_HEATMAP_SNAPSHOT';

export const addHeatmapSnapshot = (id, name, content) => ({
  ...content,
  id,
  name,
  type: ADD_HEATMAP_SNAPSHOT,
});

export const removeHeatmapSnapshot = name => ({
  name,
  type: REMOVE_HEATMAP_SNAPSHOT,
});

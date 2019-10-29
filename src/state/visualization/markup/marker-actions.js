export const ADD_MARKER = 'ADD_MARKER';
export const CHANGE_MARKER_SETTING = 'CHANGE_MARKER_SETTING';
export const CLEAR_ALL_MARKERS = 'CLEAR_ALL_MARKERS';
export const UPDATE_MARKERS = 'UPDATE_MARKERS';

export const addMarker = (id, dimensions) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  dimensions,
  id,
  type: ADD_MARKER,
});

export const changeMarkerSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  setting,
  type: CHANGE_MARKER_SETTING,
  value,
});

export const clearAllMarkers = () => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  type: CLEAR_ALL_MARKERS,
});

export const updateMarkers = list => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  list,
  type: UPDATE_MARKERS,
});

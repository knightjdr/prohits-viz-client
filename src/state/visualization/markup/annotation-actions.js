export const ADD_ANNOTATION = 'ADD_ANNOTATION';
export const CHANGE_ANNOTATION_SETTING = 'CHANGE_ANNOTATION_SETTING';
export const CLEAR_ALL_ANNOTATIONS = 'CLEAR_ALL_ANNOTATIONS';
export const TOGGLE_ANNOTATIONS = 'TOGGLE_ANNOTATIONS';
export const UPDATE_ANNOTATION_POSITION = 'UPDATE_ANNOTATION_POSITION';
export const UPDATE_ANNOTATIONS = 'UPDATE_ANNOTATIONS';

export const addAnnotation = (id, text, position) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  id,
  position,
  text,
  type: ADD_ANNOTATION,
});

export const clearAllAnnotations = () => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  type: CLEAR_ALL_ANNOTATIONS,
});

export const changeAnnotationSetting = (setting, value) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  setting,
  type: CHANGE_ANNOTATION_SETTING,
  value,
});

export const toggleAnnotations = show => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  show,
  type: TOGGLE_ANNOTATIONS,
});

export const updateAnnotationPosition = (id, position) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  id,
  position,
  type: UPDATE_ANNOTATION_POSITION,
});

export const updateAnnotations = list => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  list,
  type: UPDATE_ANNOTATIONS,
});

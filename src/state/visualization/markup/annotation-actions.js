export const SET_ANNOTATION_COLOR = 'SET_ANNOTATION_COLOR';
export const TOGGLE_ANNOTATIONS = 'TOGGLE_ANNOTATIONS';

export const setAnnotationColor = color => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  color,
  type: SET_ANNOTATION_COLOR,
});

export const toggleAnnotations = showAnnotations => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  showAnnotations,
  type: TOGGLE_ANNOTATIONS,
});

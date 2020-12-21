export const CLEAR_LABELS = 'CLEAR_LABELS';
export const TOGGLE_LABELS = 'TOGGLE_LABELS';
export const UPDATE_LABEL = 'UPDATE_LABEL';

export const clearLabels = () => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  type: CLEAR_LABELS,
});

export const toggleLabels = (status) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  status,
  type: TOGGLE_LABELS,
});

export const updateLabel = (label) => ({
  AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
  label,
  type: UPDATE_LABEL,
});

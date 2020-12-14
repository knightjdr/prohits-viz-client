export const CLEAR_INTERACTIVE_STATE = 'CLEAR_INTERACTIVE_STATE';
export const LOAD_INTERACTIVE_STATE = 'LOAD_INTERACTIVE_STATE';

export const clearInteractiveState = () => ({
  type: CLEAR_INTERACTIVE_STATE,
});

export const loadInteractiveState = (file) => ({
  file,
  type: LOAD_INTERACTIVE_STATE,
});

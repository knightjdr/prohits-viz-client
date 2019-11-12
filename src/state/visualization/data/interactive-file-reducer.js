export const reduceAndClearState = (defaultState = {}) => defaultState;

export const reduceAndLoadState = (action, property, defaultState = {}) => (
  action.file[property] ? action.file[property] : defaultState
);

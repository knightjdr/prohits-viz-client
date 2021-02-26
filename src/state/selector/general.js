import { createSelector } from 'reselect';

export const getState = (state, element) => state[element];
export const getStateProp = (state, element, property) => state[element]?.[property];

export const selectState = createSelector(
  [getState],
  (state) => (
    state
  ),
);

export const selectStateProperty = createSelector(
  [getStateProp],
  (prop) => (
    prop
  ),
);

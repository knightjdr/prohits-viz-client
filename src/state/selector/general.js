import { createSelector } from 'reselect';

const getState = (state, element) => state[element];
const getStateProp = (state, element, property) => state[element]?.[property];

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

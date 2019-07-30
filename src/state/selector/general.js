import { createSelector } from 'reselect';

const getState = (state, key) => state[key];
const getStateProp = (state, key, prop) => state[key][prop];

export const stateSelector = createSelector(
  [getState],
  state => (
    state
  ),
);

export const stateSelectorProp = createSelector(
  [getStateProp],
  prop => (
    prop
  ),
);

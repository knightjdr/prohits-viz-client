import { createSelector } from 'reselect';

export const getData = (state, element) => {
  const { activeSnapshot } = state.tabs;
  return state[element]?.[activeSnapshot];
};

export const getDataProperty = (state, element, property) => {
  const { activeSnapshot } = state.tabs;
  return state[element]?.[activeSnapshot]?.[property];
};

export const selectData = createSelector(
  [getData],
  (state) => (
    state
  ),
);

export const selectDataProperty = createSelector(
  [getDataProperty],
  (prop) => (
    prop
  ),
);

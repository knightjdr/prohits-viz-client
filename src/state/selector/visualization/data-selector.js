import { createSelector } from 'reselect';

const getState = (state, element) => {
  const { activeSnapshot } = state.tabs;
  return state[element][activeSnapshot];
};

const getStateProperty = (state, element, property) => {
  const { activeSnapshot } = state.tabs;
  return state[element][activeSnapshot][property];
};

export const selectData = createSelector(
  [getState],
  state => (
    state
  ),
);

export const selectDataProperty = createSelector(
  [getStateProperty],
  prop => (
    prop
  ),
);

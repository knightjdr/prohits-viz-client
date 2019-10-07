import { createSelector } from 'reselect';

const getState = (state, element) => {
  const { active } = state.tabs;
  return state[element][active];
};

const getStateProperty = (state, element, property) => {
  const { active } = state.tabs;
  return state[element][active][property];
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

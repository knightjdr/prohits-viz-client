import { createSelector } from 'reselect';

const getState = (state) => state.tabs.active;

const selectActiveTab = createSelector(
  [getState],
  (state) => (
    state
  ),
);

export default selectActiveTab;

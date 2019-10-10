import { createSelector } from 'reselect';

const getRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  return order.map(index => rowDB[index].name);
};

const selectRowNames = createSelector(
  [getRowNames],
  state => (
    state
  ),
);

export default selectRowNames;

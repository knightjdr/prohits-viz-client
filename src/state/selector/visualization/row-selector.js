import { createSelector } from 'reselect';

const getRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { defaultOrder } = state.rows[active];
  return defaultOrder.map(index => rowDB[index].name);
};

const getOrderedRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  return order.map(index => rowDB[index].name);
};

const getVisisbleRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  const dimensions = state.dimensions[active];
  const position = state.position[active];

  return order.slice(position.y, position.y + dimensions.pageY).map(index => rowDB[index].name);
};

export const selectRowNames = createSelector(
  [getRowNames],
  state => (
    state
  ),
);

export const selectOrderedRowNames = createSelector(
  [getOrderedRowNames],
  state => (
    state
  ),
);

export const selectVisibleRowNames = createSelector(
  [getVisisbleRowNames],
  state => (
    state
  ),
);

export default selectOrderedRowNames;

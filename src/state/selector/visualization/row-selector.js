import { createSelector } from 'reselect';

const getRowNames = (state) => {
  const { rowDB } = state;
  return rowDB.map((row) => row.name);
};

const getOrderedRowNames = (state) => {
  const { rowDB } = state;
  const { activeSnapshot } = state.tabs;
  const { order } = state.rows[activeSnapshot];
  return order.map((index) => rowDB[index].name);
};

const getVisisbleRowNames = (state) => {
  const { rowDB } = state;
  const { activeSnapshot } = state.tabs;
  const { order } = state.rows[activeSnapshot];
  const dimensions = state.dimensions[activeSnapshot];
  const position = state.position[activeSnapshot];

  return order.slice(position.y, position.y + dimensions.pageY).map((index) => rowDB[index].name);
};

export const selectRowNames = createSelector(
  [getRowNames],
  (state) => (
    state
  ),
);

export const selectOrderedRowNames = createSelector(
  [getOrderedRowNames],
  (state) => (
    state
  ),
);

export const selectVisibleRowNames = createSelector(
  [getVisisbleRowNames],
  (state) => (
    state
  ),
);

export default selectOrderedRowNames;

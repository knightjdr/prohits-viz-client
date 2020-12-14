import { createSelector } from 'reselect';

import orderArrayBySequence from '../../../utils/order-array-by-sequence';

const getColumnNames = (state) => {
  const { columnDB } = state;
  return columnDB;
};

const getOrderedColumnNames = (state) => {
  const { columnDB } = state;
  const { activeSnapshot } = state.tabs;
  const { order } = state.columns[activeSnapshot];

  return orderArrayBySequence(columnDB, order);
};

const getVisibleColumnNames = (state) => {
  const { columnDB } = state;
  const { activeSnapshot } = state.tabs;
  const { order } = state.columns[activeSnapshot];
  const dimensions = state.dimensions[activeSnapshot];
  const position = state.position[activeSnapshot];

  return order.slice(position.x, position.x + dimensions.pageX).map((index) => columnDB[index]);
};

export const selectColumnNames = createSelector(
  [getColumnNames],
  (state) => (
    state
  ),
);

export const selectOrderedColumnNames = createSelector(
  [getOrderedColumnNames],
  (state) => (
    state
  ),
);

export const selectVisibleColumnNames = createSelector(
  [getVisibleColumnNames],
  (state) => (
    state
  ),
);

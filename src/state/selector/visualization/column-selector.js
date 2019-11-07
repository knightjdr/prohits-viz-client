import { createSelector } from 'reselect';

import orderArrayBySequence from '../../../utils/order-array-by-sequence';

const getColumnNames = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { defaultOrder } = state.columns[active];

  return orderArrayBySequence(columnDB, defaultOrder);
};

const getOrderedColumnNames = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];

  return orderArrayBySequence(columnDB, order);
};

const getVisibleColumnNames = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];
  const dimensions = state.dimensions[active];
  const position = state.position[active];

  return order.slice(position.x, position.x + dimensions.pageX).map(index => columnDB[index]);
};

export const selectColumnNames = createSelector(
  [getColumnNames],
  state => (
    state
  ),
);


export const selectOrderedColumnNames = createSelector(
  [getOrderedColumnNames],
  state => (
    state
  ),
);

export const selectVisibleColumnNames = createSelector(
  [getVisibleColumnNames],
  state => (
    state
  ),
);

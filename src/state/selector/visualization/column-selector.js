import { createSelector } from 'reselect';

import orderArrayBySequence from '../../../utils/order-array-by-sequence';

const getColumnNames = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];

  return orderArrayBySequence(columnDB, order);
};

const getVisibleColumnNamesAndIndices = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];
  const dimensions = state.dimensions[active];
  const position = state.position[active];

  return order.slice(position.x, position.x + dimensions.pageX).map(index => columnDB[index]);
};

export const selectVisibleColumnNames = createSelector(
  [getVisibleColumnNamesAndIndices],
  state => (
    state
  ),
);

export const selectColumnNames = createSelector(
  [getColumnNames],
  state => (
    state
  ),
);

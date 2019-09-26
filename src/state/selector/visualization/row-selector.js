import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getRowData = (state) => {
  const { list, order } = state.rows;
  return arrayOrderBy(list, order);
};

const getRowNames = (state) => {
  const { list, order } = state.rows;
  return order.map(index => list[index].name);
};

export const rowNamesSelector = createSelector(
  [getRowNames],
  state => (
    state
  ),
);

export const rowSelector = createSelector(
  [getRowData],
  state => (
    state
  ),
);

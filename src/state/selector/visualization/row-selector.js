import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getRowData = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  return arrayOrderBy(rowDB, order);
};

const getRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  return order.map(index => rowDB[index].name);
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

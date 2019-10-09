import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getRowData = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  const orderedRows = arrayOrderBy(rowDB, order);

  const columnOrder = state.columns[active].order;
  return orderedRows.map(row => ({
    data: arrayOrderBy(row.data, columnOrder),
    name: row.name,
  }));
};

const getRowNames = (state) => {
  const { rowDB } = state;
  const { active } = state.tabs;
  const { order } = state.rows[active];
  return order.map(index => rowDB[index].name);
};

export const selectRowNames = createSelector(
  [getRowNames],
  state => (
    state
  ),
);

export const selectRows = createSelector(
  [getRowData],
  state => (
    state
  ),
);

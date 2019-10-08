import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getState = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];

  return arrayOrderBy(columnDB, order);
};

const selectColumns = createSelector(
  [getState],
  state => (
    state
  ),
);

export default selectColumns;

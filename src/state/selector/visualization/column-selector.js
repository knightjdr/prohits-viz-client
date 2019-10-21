import { createSelector } from 'reselect';

import orderArrayBySequence from '../../../utils/order-array-by-sequence';

const getState = (state) => {
  const { columnDB } = state;
  const { active } = state.tabs;
  const { order } = state.columns[active];

  return orderArrayBySequence(columnDB, order);
};

const selectColumns = createSelector(
  [getState],
  state => (
    state
  ),
);

export default selectColumns;

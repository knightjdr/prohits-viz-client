import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getState = (state) => {
  const { list, order } = state.rows;
  return arrayOrderBy(list, order);
};

const rowSelector = createSelector(
  [getState],
  state => (
    state
  ),
);

export default rowSelector;

import { createSelector } from 'reselect';

import arrayOrderBy from '../../../utils/array-order-by';

const getState = (state) => {
  const { names, order } = state.columns;
  return arrayOrderBy(names, order);
};

const columnSelector = createSelector(
  [getState],
  state => (
    state
  ),
);

export default columnSelector;

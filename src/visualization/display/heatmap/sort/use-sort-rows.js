import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sorting from './sorting';
import rowSort from './row-sort';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';
import { sortRows } from '../../../../state/visualization/data/rows-actions';

/* Sort the rows array based on a specific column as specified
** by requestedSortBy, and with reference to another column if ref is a number. */
const useSortRows = () => {
  const [sorting, setSorting] = useState(false);

  const dispatch = useDispatch();

  const names = useSelector(state => stateSelectorProp(state, 'columns', 'names'));
  const rows = useSelector(state => stateSelector(state, 'rows'));

  const {
    direction,
    list,
    order,
    sortBy,
  } = rows;

  const sort = (columnName, requestedDirection, ref) => {
    setSorting(true);

    const requestedSortBy = names.indexOf(columnName);
    const refIndex = ref ? names.indexOf(ref) : '';

    /* If a sort direction is requested, use that, or
    ** if a sort direction is not requested, but the requested
    ** sort index is the same as the last, swap sort direction, else
    ** sort descending */
    let sortDirection;
    if (requestedDirection) {
      sortDirection = requestedDirection;
    } else if (
      sortBy === requestedSortBy
      && direction
    ) {
      sortDirection = direction === 'desc' ? 'asc' : 'desc';
    } else {
      sortDirection = 'desc';
    }

    const newOrder = rowSort(list, order, requestedSortBy, sortDirection, refIndex);

    dispatch(sortRows(sortDirection, newOrder, requestedSortBy));

    setSorting(false);
  };

  return {
    rows: sort,
    Component: sorting ? <Sorting isOpen={sorting} /> : null,
  };
};

export default useSortRows;

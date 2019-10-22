import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../utils/action-notification';

import rowSort from './row-sort';
import { selectData } from '../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../state/selector/general';
import { sortRows } from '../../../../state/visualization/heatmap/rows-actions';


/* Sort the rows array based on a specific column as specified
** by requestedSortBy, and with reference to another column if ref is a number. */
const useSortRows = () => {
  const [sorting, setSorting] = useState(false);

  const dispatch = useDispatch();

  const columns = useSelector(state => selectState(state, 'columnDB'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const {
    defaultOrder,
    direction,
    filterOrder,
    sortBy,
  } = rows;

  const rowOrder = filterOrder.length > 0 ? [...filterOrder] : [...defaultOrder];
  const sort = (requestedSortBy, requestedDirection, ref) => {
    setSorting(true);

    const requestedSortIndex = columns.indexOf(requestedSortBy);
    const refIndex = ref ? columns.indexOf(ref) : '';

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

    const newOrder = rowSort(rowDB, rowOrder, requestedSortIndex, sortDirection, refIndex);

    dispatch(sortRows(sortDirection, newOrder, requestedSortBy));

    setSorting(false);
  };

  return {
    process: sort,
    Component: sorting
      ? (
        <ActionNotification
          id="heatmap-sorting"
          isOpen={sorting}
          text="sorting"
        />
      )
      : null,
  };
};

export default useSortRows;

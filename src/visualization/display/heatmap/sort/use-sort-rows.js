import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../utils/action-notification';

import rowSort from './row-sort';
import { selectData } from '../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../state/selector/general';
import { sortRows } from '../../../../state/visualization/heatmap/rows-actions';


const useSortRows = () => {
  const [isSorting, setSorting] = useState(false);

  const dispatch = useDispatch();

  const columns = useSelector(state => selectState(state, 'columnDB'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const {
    direction,
    order,
    sortBy,
  } = rows;

  const sort = (requestedSortBy, requestedDirection, ref) => {
    setSorting(true);

    const requestedSortIndex = columns.indexOf(requestedSortBy);
    const refIndex = ref ? columns.indexOf(ref) : '';

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

    const newOrder = rowSort(rowDB, order, requestedSortIndex, sortDirection, refIndex);

    dispatch(sortRows(sortDirection, newOrder, requestedSortBy));

    setSorting(false);
  };

  return {
    process: sort,
    Component: isSorting
      ? (
        <ActionNotification
          id="heatmap-sorting"
          isOpen={isSorting}
          text="sorting"
        />
      )
      : null,
  };
};

export default useSortRows;

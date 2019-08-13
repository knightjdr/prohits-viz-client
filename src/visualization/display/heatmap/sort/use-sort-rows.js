import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import deepCopy from '../../../../utils/deep-copy';
import rowMapping from './row-mapping';
import Sorting from './sorting';
import sortMethod from './sort-method';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';
import { updateRows } from '../../../../state/visualization/file/rows-actions';

/* Sort the rows array based on a specific column as specified
** by requestedSortBy, and with reference to another column if ref is a number. */
const useSortRows = () => {
  const [sorting, setSorting] = useState(false);

  const dispatch = useDispatch();

  const names = useSelector(state => stateSelectorProp(state, 'columns', 'names'));
  const rows = useSelector(state => stateSelector(state, 'rows'));
  const selection = useSelector(state => stateSelector(state, 'selection'));

  const {
    direction,
    list,
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

    const sortedList = deepCopy(list);
    sortedList.sort(sortMethod(requestedSortBy, sortDirection, refIndex));

    // Create row list for selection menu.
    const updatedSelection = rowMapping(selection.rows, sortedList);

    dispatch(updateRows(sortDirection, sortedList, requestedSortBy, updatedSelection));

    setSorting(false);
  };

  return {
    rows: sort,
    Component: sorting ? <Sorting isOpen={sorting} /> : null,
  };
};

export default useSortRows;

import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../../../utils/action-notification';

import rowSort from '../../../../heatmap/sort/row-sort';
import selectColumns from '../../../../../../state/selector/visualization/column-selector';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import { filterRows } from '../../../../../../state/visualization/heatmap/rows-actions';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../state/visualization/settings/settings-actions';

const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a >= primaryFilter;
  const lte = a => a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

const filterColumn = (rowDB, rowOrder, scoreType, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  const filteredColumns = [];
  const numberColumns = rowDB[0].data.length;
  for (let i = 0; i < numberColumns; i += 1) {
    const keep = rowOrder.some(rowIndex => scoreCriterion(rowDB[rowIndex].data[i].score));
    if (keep) {
      filteredColumns.push(i);
    }
  }
  return filteredColumns;
};

const filterRow = (order, rows, filterIndex, scoreType, abundance, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  if (filterIndex > -1) {
    return order.filter(rowIndex => (
      rows[rowIndex].data[filterIndex].value >= abundance
      && scoreCriterion(rows[rowIndex].data[filterIndex].score)
    ));
  }
  return order.filter(rowIndex => (
    rows[rowIndex].data.some(datam => (
      datam.value >= abundance && scoreCriterion(datam.score)
    ))
  ));
};

/* Filter heatmap by minAbundance and primaryFilter score. */
const useRowFilter = () => {
  const [isFiltering, setFiltering] = useState(false);

  const dispatch = useDispatch();

  const activeTab = useSelector(state => selectActiveTab(state));
  const columnDB = useSelector(state => selectColumns(state));
  const columns = useSelector(state => selectData(state, 'columns'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const defaultColumnOrder = columns.order;
  const sortByRef = columns.ref;
  const {
    direction,
    defaultOrder,
    sortBy,
    sortOrder,
  } = rows;
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
  } = settings;

  const filter = useCallback(
    (setting, value) => {
      setFiltering(true);
      const newAbundance = setting === 'minAbundance' ? value : minAbundance;
      const newFilterBy = setting === 'filterBy' ? value : filterBy;
      const newPrimaryFilter = setting === 'primaryFilter' ? value : primaryFilter;
      const newRemoveEmptyColumns = setting === 'removeEmptyColumns' ? value : removeEmptyColumns;

      // Filter rows first, then reapplying sorting if sorting had been applied. Finally,
      // filter columns.
      const filterIndex = columnDB.indexOf(newFilterBy);
      const rowOrder = setting === 'filterBy' || sortOrder.length === 0 ? defaultOrder : sortOrder;
      let newRowOrder = filterRow(
        rowOrder,
        rowDB,
        filterIndex,
        scoreType,
        newAbundance,
        newPrimaryFilter,
      );
      if (sortBy) {
        const requestedSortIndex = columnDB.indexOf(sortBy);
        const refIndex = sortByRef ? columnDB.indexOf(sortByRef) : '';
        newRowOrder = rowSort(rowDB, newRowOrder, requestedSortIndex, direction, refIndex);
      }

      const newColumnOrder = newRemoveEmptyColumns
        ? filterColumn(rowDB, newRowOrder, scoreType, newPrimaryFilter) : defaultColumnOrder;

      dispatch(updateSetting(activeTab, setting, value));
      dispatch(filterRows(activeTab, newRowOrder, newColumnOrder));

      setFiltering(false);
    },
    [
      activeTab,
      columnDB,
      defaultColumnOrder,
      defaultOrder,
      direction,
      dispatch,
      filterBy,
      minAbundance,
      removeEmptyColumns,
      rowDB,
      sortOrder,
      primaryFilter,
      scoreType,
      sortBy,
      sortByRef,
    ],
  );

  return {
    process: filter,
    Component: isFiltering
      ? (
        <ActionNotification
          id="heatmap-filtering"
          isOpen={isFiltering}
          text="filtering"
        />
      )
      : null,
  };
};

export default useRowFilter;

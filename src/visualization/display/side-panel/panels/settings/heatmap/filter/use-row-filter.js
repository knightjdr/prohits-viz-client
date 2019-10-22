import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../../../../utils/action-notification';

import rowSort from '../../../../../heatmap/sort/row-sort';
import selectColumns from '../../../../../../../state/selector/visualization/column-selector';
import { filterRows } from '../../../../../../../state/visualization/heatmap/rows-actions';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a === undefined || a >= primaryFilter;
  const lte = a => a === undefined || a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

const filterColumn = (rowDB, rowOrder, columnOrder, scoreType, minAbundance, primaryFilter) => {
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  return columnOrder.filter(columnIndex => (
    rowOrder.some(rowIndex => (
      rowDB[rowIndex].data[columnIndex].value >= minAbundance
      && scoreCriterion(rowDB[rowIndex].data[columnIndex].score)
    ))
  ));
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

const useRowFilter = () => {
  const [isFiltering, setFiltering] = useState(false);

  const dispatch = useDispatch();

  const columnDB = useSelector(state => selectColumns(state));
  const columns = useSelector(state => selectData(state, 'columns'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const filter = useCallback(
    (setting, value) => {
      setFiltering(true);

      const {
        defaultOrder: defaultColumnOrder,
        sortOrder: columnSortOrder,
      } = columns;
      const sortByRef = columns.ref;
      const {
        direction,
        defaultOrder: defaultRowOrder,
        sortBy,
        sortOrder: rowSortOrder,
      } = rows;
      const {
        filterBy,
        minAbundance,
        primaryFilter,
        removeEmptyColumns,
      } = settings;

      const newAbundance = setting === 'minAbundance' ? value : minAbundance;
      const newFilterBy = setting === 'filterBy' ? value : filterBy;
      const newPrimaryFilter = setting === 'primaryFilter' ? value : primaryFilter;
      const newRemoveEmptyColumns = setting === 'removeEmptyColumns' ? value : removeEmptyColumns;

      // Filter rows first, then reapplying sorting if sorting had been applied. Finally,
      // filter columns.
      const filterIndex = columnDB.indexOf(newFilterBy);
      const rowOrder = setting === 'filterBy' || rowSortOrder.length === 0 ? defaultRowOrder : rowSortOrder;
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

      const columnOrder = columnSortOrder.length === 0 ? defaultColumnOrder : columnSortOrder;
      const newColumnOrder = newRemoveEmptyColumns
        ? filterColumn(rowDB, newRowOrder, columnOrder, scoreType, newAbundance, newPrimaryFilter) : columnOrder;

      dispatch(updateSetting(setting, value));
      dispatch(filterRows(newRowOrder, newColumnOrder));

      setFiltering(false);
    },
    [
      columnDB,
      columns,
      dispatch,
      rowDB,
      rows,
      scoreType,
      settings,
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

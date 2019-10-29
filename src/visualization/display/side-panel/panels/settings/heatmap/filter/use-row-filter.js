import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../../../../utils/action-notification';

import rowSort from '../../../../../heatmap/sort/row-sort';
import selectColumns from '../../../../../../../state/selector/visualization/column-selector';
import { filterRows } from '../../../../../../../state/visualization/heatmap/rows-actions';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

export const defineLatestValues = (updatedSetting, updatedValue, settings) => {
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
  } = settings;

  return {
    minAbundance,
    filterBy,
    primaryFilter,
    removeEmptyColumns,
    [updatedSetting]: updatedValue,
  };
};

export const defineScoreCriterion = (scoreType, primaryFilter) => {
  const gte = a => a === undefined || a >= primaryFilter;
  const lte = a => a === undefined || a <= primaryFilter;

  return scoreType === 'gte' ? gte : lte;
};

export const defineStartingColumnOrder = (defaultOrder, sortOrder) => (
  sortOrder.length === 0 ? defaultOrder : sortOrder
);

export const defineStartingRowOrder = (setting, defaultOrder, sortOrder) => (
  setting === 'filterBy' || sortOrder.length === 0 ? defaultOrder : sortOrder
);

export const filterAndOrderColumns = (rowDB, rowOrder, startingOrder, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  return startingOrder.filter(columnIndex => (
    rowOrder.some(rowIndex => (
      rowDB[rowIndex].data[columnIndex].value >= minAbundance
      && scoreCriterion(rowDB[rowIndex].data[columnIndex].score)
    ))
  ));
};

export const filterAndOrderRows = (rowDB, startingOrder, filterIndices, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  if (filterIndices.length > 0) {
    return startingOrder.filter(rowIndex => (
      filterIndices.some(filterIndex => (
        rowDB[rowIndex].data[filterIndex].value >= minAbundance
        && scoreCriterion(rowDB[rowIndex].data[filterIndex].score)
      ))
    ));
  }
  return startingOrder.filter(rowIndex => (
    rowDB[rowIndex].data.some(datam => (
      datam.value >= minAbundance && scoreCriterion(datam.score)
    ))
  ));
};

export const findColumnIndices = (columnNames, selectedColumns) => (
  columnNames.reduce((accum, name, index) => (
    selectedColumns.includes(name) ? [...accum, index] : accum
  ), [])
);

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
    (updatedSetting, updatedValue) => {
      setFiltering(true);

      const {
        defaultOrder: defaultColumnOrder,
        ref: sortByRef,
        sortOrder: columnSortOrder,
      } = columns;
      const {
        direction,
        defaultOrder: defaultRowOrder,
        sortBy,
        sortOrder: rowSortOrder,
      } = rows;

      const latestValues = defineLatestValues(updatedSetting, updatedValue, settings);

      // Filter rows first, then reapplying sorting if sorting had been applied. Finally,
      // filter columns.
      const filterIndices = findColumnIndices(columnDB, latestValues.filterBy);
      const startingRowOrder = defineStartingRowOrder(updatedSetting, defaultRowOrder, rowSortOrder);
      let newRowOrder = filterAndOrderRows(rowDB, startingRowOrder, filterIndices, scoreType, latestValues);
      if (sortBy) {
        const requestedSortIndex = columnDB.indexOf(sortBy);
        const refIndex = sortByRef ? columnDB.indexOf(sortByRef) : '';
        newRowOrder = rowSort(rowDB, newRowOrder, requestedSortIndex, direction, refIndex);
      }

      const startingColumnOrder = defineStartingColumnOrder(defaultColumnOrder, columnSortOrder);
      const newColumnOrder = latestValues.removeEmptyColumns
        ? filterAndOrderColumns(rowDB, newRowOrder, startingColumnOrder, scoreType, latestValues)
        : startingColumnOrder;

      dispatch(updateSetting(updatedSetting, updatedValue));
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

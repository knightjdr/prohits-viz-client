import React, { useCallback, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../../../../utils/action-notification';

import rowSort from '../../../../../heatmap/sort/row-sort';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../../state/selector/general';
import { setColumnFilterOrder } from '../../../../../../../state/visualization/heatmap/columns-actions';
import { setRowFilterOrder } from '../../../../../../../state/visualization/heatmap/rows-actions';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

export const defineAvailableIndices = (indices, deleted) => {
  indices.reduce((accum, index) => (
    deleted.includes(index) ? accum : [...accum, index]
  ), []);
};

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

const defineStartingColumnOrder = (defaultOrder, filterColumnIndices) => (
  filterColumnIndices.length > 0 ? filterColumnIndices : defaultOrder
);

export const filterAndOrderColumns = (rowDB, rowOrder, columnOrder, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  return columnOrder.filter(columnIndex => (
    rowOrder.some(rowIndex => (
      rowDB[rowIndex].data[columnIndex].value >= minAbundance
      && scoreCriterion(rowDB[rowIndex].data[columnIndex].score)
    ))
  ));
};

export const filterAndOrderRows = (rowData, indices, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const scoreCriterion = defineScoreCriterion(scoreType, primaryFilter);
  return indices.rows.filter(rowIndex => (
    indices.columns.some((columnIndex) => {
      const { score, value } = rowData[rowIndex].data[columnIndex];
      return value >= minAbundance && scoreCriterion(score);
    })
  ));
};

export const subsetAvailableData = (rowData, indices) => (
  indices.rows.map(rowIndex => ({
    data: indices.columns.map(columnIndex => rowData[rowIndex].data[columnIndex]),
    name: rowData[rowIndex].name,
  }))
);

const useFilter = () => {
  const [isFiltering, setFiltering] = useState(false);

  const dispatch = useDispatch();

  const columns = useSelector(state => selectData(state, 'columns'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const rows = useSelector(state => selectData(state, 'rows'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));

  const filter = useCallback(
    (updatedSetting, updatedValue) => {
      setFiltering(true);

      const {
        deleted: deletedColumns,
        defaultOrder: columnOrder,
        ref: sortByRef,
      } = columns;
      const {
        deleted: deletedRows,
        direction,
        defaultOrder: rowOrder,
        sortBy,
      } = rows;

      const latestValues = defineLatestValues(updatedSetting, updatedValue, settings);
      const startingColumnOrder = defineStartingColumnOrder(columnOrder, latestValues.filterBy);
      const indices = {
        columns: defineAvailableIndices(startingColumnOrder, deletedColumns),
        rows: defineAvailableIndices(rowOrder, deletedRows),
      };

      let newRowOrder = filterAndOrderRows(rowDB, indices, scoreType, latestValues);
      if (sortBy) {
        newRowOrder = rowSort(rowDB, newRowOrder, sortBy, direction, sortByRef);
      }

      const newColumnOrder = latestValues.removeEmptyColumns
        ? filterAndOrderColumns(rowDB, newRowOrder, columnOrder, scoreType, latestValues)
        : columnOrder;

      batch(() => {
        dispatch(updateSetting(updatedSetting, updatedValue));
        dispatch(setRowFilterOrder(newRowOrder));
        dispatch(setColumnFilterOrder(newColumnOrder));
      });

      setFiltering(false);
    },
    [
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

export default useFilter;

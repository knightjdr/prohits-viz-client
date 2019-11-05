import React, { useCallback, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import ActionNotification from '../../../../../../utils/action-notification';

import canReSort from './can-re-sort';
import defineAvailableIndices from './define-available-indices';
import defineFilteringColumnOrder from './define-filtering-column-order';
import defineLatestValues from './define-latest-values';
import findFilterIndices from './find-filter-indices';
import rowSort from '../../../../../heatmap/sort/row-sort';
import { filterAndOrderColumns, filterAndOrderRows } from './filter-and-order';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../../../../state/selector/general';
import { setColumnOrder } from '../../../../../../../state/visualization/heatmap/columns-actions';
import { setRowOrder } from '../../../../../../../state/visualization/heatmap/rows-actions';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';

const useFilter = () => {
  const [isFiltering, setFiltering] = useState(false);

  const dispatch = useDispatch();

  const columnDB = useSelector(state => selectState(state, 'columnDB'));
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
      const columnFilterIndices = findFilterIndices(columnDB, latestValues.filterBy);
      const availableColumns = defineAvailableIndices(columnOrder, deletedColumns);
      const subsetIndices = {
        columns: defineFilteringColumnOrder(availableColumns, columnFilterIndices),
        rows: defineAvailableIndices(rowOrder, deletedRows),
      };

      let newRowOrder = filterAndOrderRows(rowDB, subsetIndices, scoreType, latestValues);
      const resort = canReSort(columnDB, availableColumns, sortBy, sortByRef);
      if (resort.status) {
        newRowOrder = rowSort(rowDB, newRowOrder, resort.sortByIndex, direction, resort.sortByRefIndex);
      }

      const newColumnOrder = latestValues.removeEmptyColumns
        ? filterAndOrderColumns(rowDB, newRowOrder, availableColumns, scoreType, latestValues)
        : availableColumns;

      batch(() => {
        dispatch(updateSetting(updatedSetting, updatedValue));
        dispatch(setRowOrder(newRowOrder));
        dispatch(setColumnOrder(newColumnOrder));
      });

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

export default useFilter;

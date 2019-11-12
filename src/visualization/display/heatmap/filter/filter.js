import canReSort from './can-re-sort';
import defineAndOrderAvailableIndices from './define-and-order-available-indices';
import defineFilteringColumnOrder from './define-filtering-column-order';
import defineLatestValues from './define-latest-values';
import findFilterIndices from './find-filter-indices';
import rowSort from '../sort/row-sort';
import { filterAndOrderColumns, filterAndOrderRows } from './filter-and-order';

const filter = (updatedSetting, updatedValue, updatedOrder, filterOptions) => {
  const {
    columnDB,
    columns,
    rowDB,
    rows,
    scoreType,
    settings,
  } = filterOptions;

  const {
    defaultOrder: defaultColumnOrder,
    deleted: deletedColumns,
    order: columnOrder,
    ref: sortByRef,
  } = columns;
  const {
    defaultOrder: defaultRowOrder,
    deleted: deletedRows,
    direction,
    order: rowOrder,
    sortBy,
  } = rows;

  const filterSettings = {
    ...settings,
    sortBy,
    sortByRef,
  };

  const latestValues = defineLatestValues(updatedSetting, updatedValue, updatedOrder, filterSettings);
  const columnFilterIndices = findFilterIndices(columnDB, latestValues.filterBy);
  const availableColumns = defineAndOrderAvailableIndices(
    updatedOrder.columns,
    defaultColumnOrder,
    columnOrder,
    deletedColumns,
  );
  const subsetIndices = {
    columns: defineFilteringColumnOrder(availableColumns, columnFilterIndices),
    rows: defineAndOrderAvailableIndices(updatedOrder.rows, defaultRowOrder, rowOrder, deletedRows),
  };

  let newRowOrder = latestValues.removeFailingRows
    ? filterAndOrderRows(rowDB, subsetIndices, scoreType, latestValues)
    : subsetIndices.rows;

  const resort = canReSort(columnDB, availableColumns, latestValues.sortBy, latestValues.sortByRef);
  if (resort.status) {
    newRowOrder = rowSort(rowDB, newRowOrder, resort.sortByIndex, direction, resort.sortByRefIndex);
  }

  const newColumnOrder = latestValues.removeFailingColumns
    ? filterAndOrderColumns(rowDB, newRowOrder, availableColumns, scoreType, latestValues)
    : availableColumns;

  return {
    columns: newColumnOrder,
    rows: newRowOrder,
  };
};

export default filter;

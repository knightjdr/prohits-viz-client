import arrayContains from '../../../utils/array-contains';
import mapArr from '../../../utils/map-array';
import { arrayShallowEqual } from '../../../utils/array-shallow-equal';

export const defaultState = {
  columnMap: {},
  columns: [],
  columnsSelected: [],
  rowMap: {},
  rows: [],
  rowsSelected: [],
};

const fillSelection = (userSelection = {}, userColumns, userRows) => {
  if (!userSelection) {
    return {
      columnMap: {},
      columns: [],
      columnsSelected: [],
      rowMap: {},
      rows: [],
      rowsSelected: [],
    };
  }

  const {
    columnMap,
    columns,
    columnsSelected,
    rowMap,
    rows,
    rowsSelected,
  } = userSelection;
  const selection = {};

  // Ensure gene column elements are consistent with columns.
  if (Array.isArray(columns)) {
    selection.columns = columns;
    if (
      typeof columnMap === 'object'
      && arrayShallowEqual(Object.keys(columnMap), columns)
    ) {
      selection.columnMap = columnMap;
    } else {
      selection.columnMap = mapArr(columns);
    }
    if (
      Array.isArray(columnsSelected)
      && arrayContains(columns, columnsSelected)
    ) {
      selection.columnsSelected = columnsSelected;
    } else {
      selection.columnsSelected = [];
    }
  } else {
    selection.columnMap = mapArr(userColumns.names);
    selection.columns = userColumns.names;
    selection.columnsSelected = [];
  }

  // Ensure gene row elements are consistent with rows.
  if (Array.isArray(rows)) {
    selection.rows = rows;
    if (
      typeof rowMap === 'object'
      && arrayShallowEqual(Object.keys(rowMap), rows)
    ) {
      selection.rowMap = rowMap;
    } else {
      selection.rowMap = mapArr(rows);
    }
    if (
      Array.isArray(rowsSelected)
      && arrayContains(rows, rowsSelected)
    ) {
      selection.rowsSelected = rowsSelected;
    } else {
      selection.rowsSelected = [];
    }
  } else {
    const rowArr = userRows.list.map(row => row.name);
    selection.rowMap = mapArr(rowArr);
    selection.rows = rowArr;
    selection.rowsSelected = [];
  }

  return selection;
};

export default fillSelection;

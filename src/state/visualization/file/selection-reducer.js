import * as actions from './selection-actions';
import * as fileActions from './interactive-file-actions';
import * as rowActions from './rows-actions';

export const defaultState = {
  columnMap: {},
  columns: [],
  columnsSelected: [],
  rowMap: {},
  rows: [],
  rowsSelected: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        columnMap: {},
        columns: [],
        columnsSelected: [],
        rowMap: {},
        rows: [],
        rowsSelected: [],
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.selection
        ? action.file.selection
        : {
          columnMap: {},
          columns: [],
          columnsSelected: [],
          rowMap: {},
          rows: [],
          rowsSelected: [],
        };
    case rowActions.RESTORE_ROWS:
      return {
        ...state,
        rowMap: action.rows.mapped,
        rows: action.rows.list,
      };
    case rowActions.UPDATE_ROWS:
      return {
        ...state,
        rowMap: action.rows.mapped,
        rows: action.rows.list,
      };
    case actions.UPDATE_SELECTIONS:
      return {
        ...state,
        ...action.selections,
      };
    default:
      return state;
  }
};

export default reducer;

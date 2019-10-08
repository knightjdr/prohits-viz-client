import * as actions from './dimension-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  columns: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
  rows: 0,
  width: 0,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.dimensions || {};
    case actions.SET_DIMENSIONS:
      return {
        ...state,
        [action.dataID]: {
          columns: action.columns,
          height: action.height,
          pageX: action.pageX,
          pageY: action.pageY,
          rows: action.rows,
          width: action.width,
        },
      };
    default:
      return state;
  }
};
export default reducer;

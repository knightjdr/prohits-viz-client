import * as actions from './dimension-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  canTranslate: 0,
  columns: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
  rows: 0,
  width: 0,
  wrapperHeight: 0,
  wrapperWidth: 0,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.dimensions || {};
    case actions.SET_DIMENSIONS:
      return {
        ...state,
        [action.dataID]: {
          canTranslate: action.dimensions.canTranslate,
          columns: action.dimensions.columns,
          height: action.dimensions.height,
          pageX: action.dimensions.pageX,
          pageY: action.dimensions.pageY,
          rows: action.dimensions.rows,
          width: action.dimensions.width,
          wrapperHeight: action.dimensions.wrapperHeight,
          wrapperWidth: action.dimensions.wrapperWidth,
        },
      };
    default:
      return state;
  }
};
export default reducer;

import * as actions from './dimension-actions';

export const defaultState = {
  columns: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
  rows: 0,
  width: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_DIMENSIONS:
      return {
        columns: action.columns,
        height: action.height,
        pageX: action.pageX,
        pageY: action.pageY,
        rows: action.rows,
        width: action.width,
      };
    default:
      return state;
  }
};
export default reducer;

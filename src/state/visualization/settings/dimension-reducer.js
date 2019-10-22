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
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.dimensions || {};
    case actions.SET_DIMENSIONS:
      return {
        ...state,
        [action.selectionID]: {
          ...action.dimensions,
        },
      };
    default:
      return state;
  }
};
export default reducer;

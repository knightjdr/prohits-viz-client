import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  plotFixed: false,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.FIX_PLOT:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          plotFixed: action.fixed,
        },
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.display || {};
    default:
      return state;
  }
};

export default reducer;
